const express = require('express');
const router = express.Router();

router.get('/messages', (req, res) => {
  res.json({ message: 'This is a message from the backend API' });
});

module.exports = router;