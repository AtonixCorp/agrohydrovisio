require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./User');
const verifyToken = require('./verifyToken');
const authRoutes = require('../routes/authRoutes');
const Post = require('./Post');
const postRoutes = require('../routes/postRoutes');
const views = require('../views/partials');
const app = express();
const path = require('path');
const session = require('express-session');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connection successful'))
  .catch((err) => console.error('MongoDB connection error:', err));

const createPost = async (userId, content) => {
  const newPost = new Post({
    user: userId,
    content: content,
  });

  try {
    const savedPost = await newPost.save();
    console.log('Post created successfully:', savedPost);
  } catch (error) {
    console.error('Error creating post:', error);
  }
};

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).send('Username and password are required.');
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('Username already taken.');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
    });
    await newUser.save();
    console.log('User created successfully:', newUser);
    res.redirect(`/index?username=${newUser.username}`);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Error creating the user');
  }
});

app.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/login');
    }
  });
});

app.use(
  session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
  }),
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.use(express.static(path.join(__dirname, 'public')));

app.use('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.get('/post', (req, res) => {
  res.sendFile(__dirname + '/public/post.html');
});

app.use('/signin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signin.html'));
});

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/protected', verifyToken, (req, res) => {
  res.send('This is a protected route');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
