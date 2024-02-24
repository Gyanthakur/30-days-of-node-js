const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product'); 

const router = express.Router();

mongoose.connect('mongodb://localhost:27017/scaler', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (err) {
    res.status(400).json({ message: 'Error creating product', error: err.message });
  }
});

// Get all products route
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
});

// Update product route
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (err) {
    res.status(500).json({ message: 'Error updating product', error: err.message });
  }
});

// Delete product route
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product', error: err.message });
  }
});

module.exports = router;
