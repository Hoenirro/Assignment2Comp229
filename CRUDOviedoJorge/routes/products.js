var express = require('express');
var router = express.Router();
var productController = require('../controllers/product.controller')

/* GET users listing. */
router
  .get('/:id', productController.findBID)
  .get('/', productController.findAll)
  .post('/', productController.save)
  .put('/:id', productController.update)
  .delete('/:id', productController.delete)
  .delete('/', productController.remover)
  .get('/', productController.findbyContent);

module.exports = router;



/**
const ProductModel = require('../models/product.model');

// Create a new product
module.exports.create = async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    const result = await product.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all products
module.exports.getAll = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific product by ID
module.exports.getById = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(404).json({ error: 'Product not found' });
  }
};

// Update a product by ID
module.exports.updateById = async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json(product);
  } catch (err) {
    res.status(404).json({ error: 'Product not found' });
  }
};

// Delete a product by ID
module.exports.deleteById = async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(404).json({ error: 'Product not found' });
  }
};
*/