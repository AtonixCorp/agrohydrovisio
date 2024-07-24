const express = require('express')
const compression = require('compression')

const app = express()

app.use(compression())
app.use(express.static('dist'))

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
