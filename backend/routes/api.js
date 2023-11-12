const express = require('express');
const router = express.Router();
const DataItem = require('../models/dataItem'); // Importing our model

// POST route to add data
router.post('/data', async (req, res) => {
  try {
    const newDataItem = new DataItem({
      content: req.body.content
    });

    const savedItem = await newDataItem.save();
    res.json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET route to search data
router.get('/search', async (req, res) => {
  try {
    const items = await DataItem.find({
      content: { $regex: req.query.q, $options: 'i' } // This is a regex search, case-insensitive
    });
    res.json(items);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
