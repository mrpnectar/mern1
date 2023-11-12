const mongoose = require('mongoose');

// Define the schema
const DataItemSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  }
});

// Create a model from the schema
const DataItem = mongoose.model('DataItem', DataItemSchema);

module.exports = DataItem;
