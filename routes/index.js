const express = require('express');
const router = express.Router();
const upload = require('./upload'); // multer middleware
const Image = require('../models/images');

// GET home route
router.get('/', (req, res) => {
  Image.find({}, (err, images) => {
    if (err) {
      console.error("Error fetching images:", err);
      return res.render('index', { images: [], msg: "Error fetching images" });
    }
    res.render('index', { images, msg: req.query.msg });
  });
});

// POST upload route
router.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.redirect(`/?msg=${err}`);
    }

    if (!req.file) {
      return res.redirect('/?msg=Error: No file selected!');
    }

    // Create new image document
    const newImage = new Image({
      name: req.file.filename,
      size: req.file.size,
      path: 'images/' + req.file.filename
    });

    newImage.save()
      .then(() => res.redirect('/?msg=File uploaded successfully'))
      .catch(dbErr => {
        console.error("Error saving image to DB:", dbErr);
        res.redirect('/?msg=Error saving image to database');
      });
  });
});

module.exports = router;
