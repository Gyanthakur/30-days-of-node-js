const mongoose = require('mongoose');
const Category = require('./category');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

const ProductWithCategory = mongoose.model('ProductWithCategory', productSchema);

module.exports = ProductWithCategory;
