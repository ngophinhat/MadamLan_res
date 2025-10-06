const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
    discount: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  }
}, { timestamps: true });

module.exports = mongoose.model('Dish', dishSchema);