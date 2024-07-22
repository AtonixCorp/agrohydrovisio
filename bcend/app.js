require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const session = require('express-session')
const path = require('path')
const mongoose = require('mongoose')
const crypto = require('crypto')
const SECRET_KEY = crypto.randomBytes(64).toString('hex')
const app = express()
const PORT = process.env.PORT || 3000
const mongoDBUri = process.env.MONGODB_URI

// Connect to MongoDB
mongoose
  .connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection successful'))
  .catch((err) => console.error('MongoDB connection error:', err))

mongoose.set('strictQuery', false)

// Define models
const User = mongoose.model('User', {
  username: String,
  email: String,
  password: String,
})
const Post = mongoose.model('Post', {
  userId: mongoose.Schema.Types.ObjectId,
  text: String,
})

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
)

// Authentication middleware
function authenticateJWT(req, res, next) {
  const token = req.session.token

  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}

function requireAuth(req, res, next) {
  const token = req.session.token

  if (!token) return res.redirect('/login')

  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    req.user = decoded
    next()
  } catch (error) {
    return res.redirect('/login')
  }
}

// Routes
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html')),
)
app.get('/register', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'register.html')),
)
app.get('/login', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'login.html')),
)
app.get('/post', requireAuth, (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'post.html')),
)
app.get('/index', requireAuth, (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html')),
)

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] })

    if (existingUser)
      return res.status(400).json({ message: 'User already exists' })

    const newUser = new User({ username, email, password })
    await newUser.save()

    const token = jwt.sign(
      { userId: newUser._id, username: newUser.username },
      SECRET_KEY,
      { expiresIn: '1h' },
    )
    req.session.token = token

    res.json({ message: `The user ${username} has been added` })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username, password })

    if (!user) return res.status(401).json({ message: 'Invalid credentials' })

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      SECRET_KEY,
      { expiresIn: '1h' },
    )
    req.session.token = token

    res.redirect('/post')
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) console.error(err)
    res.redirect('/login')
  })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
