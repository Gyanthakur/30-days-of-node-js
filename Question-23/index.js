const mongoose = require('mongoose');
const ProductWithCategory = require('./models/product');

async function getProductsPopulatedWithCategory() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/scaler');

    // Populate products with their associated categories
    const products = await ProductWithCategory.find().populate('category');

    // Close connection
    await mongoose.disconnect();

    return products;
  } catch (error) {
    console.error('Error retrieving products:', error);
    return []; // Handle errors gracefully
  }
}

// Usage example:
getProductsPopulatedWithCategory()
  .then(products => {
    console.log('Products with populated categories:', products);
  })
  .catch(error => {
    console.error('Error:', error);
  });
