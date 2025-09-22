// routes/index.js
const express = require('express');
const router = express.Router();

// Homepage route (renders view, requires DB + EJS)
router.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

// Health check route (safe for tests, no DB)
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = router;
