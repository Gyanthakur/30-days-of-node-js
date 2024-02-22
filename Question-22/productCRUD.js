const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});


const Product = mongoose.model('Product', productSchema);


function createProduct(product) {
  return new Product(product).save();
}

function getAllProducts() {
  return Product.find().sort('name');
}

function updateProduct(productId, updatedProduct) {
  return Product.findByIdAndUpdate(productId, updatedProduct, { new: true });
}


function deleteProduct(productId) {
  return Product.findByIdAndDelete(productId);
}

// Create a product
const product = {
  name: 'Laptop',
  price: 1200,
  quantity: 10,
};
createProduct(product);

// Retrieve all products
const products = getAllProducts();
console.log('All Products:', products);

// Update a product
const updatedProduct = {
  name: 'Desktop',
  price: 1500,
  quantity: 20,
};
updateProduct(product._id, updatedProduct);

// Delete the product
deleteProduct(product._id);
