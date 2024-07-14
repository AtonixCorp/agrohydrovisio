const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const messagesRoutes = require('./messagesRoutes');

app.use(express.json());

app.use('/api', messagesRoutes);

app.get('/', (req, res) => {
  res.send('Hello, Welcome to ofidotechblog Admin Startup!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
