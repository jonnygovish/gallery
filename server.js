const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Set view engine to EJS and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Root route: pass an array of image objects
app.get('/', (req, res) => {
  const images = [
    { url: '/images/pic1.jpg', title: 'Image 1' },
    { url: '/images/pic2.jpg', title: 'Image 2' },
  ];

  res.render('index', { images });
});

// Optional: route for single image view
app.get('/image', (req, res) => {
  res.render('singleImage');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
