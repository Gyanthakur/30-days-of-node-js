const mongoose = require('mongoose');

const Product = mongoose.model('Product');


async function createProductNameIndex() {
  try {
    await Product.createIndex({ name: { unique: true, caseInsensitive: true } });
    console.log('Index created successfully on the "name" field of the "Product" collection.');
  } catch (error) {
    console.error('Error creating index:', error);
  }
}


createProductNameIndex();
