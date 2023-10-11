let ProductModel = require('../models/product.model');

module.exports.save = async (req, res) => {
    const user = new ProductModel(req.body);
    let result = await user.save();
    res.json(result)
}

module.exports.findAll = async (req, res) => {
    let result = await ProductModel.find(req.params)
    res.json(result)
}

module.exports.findBID = async (req, res) => {
  let result = await ProductModel.findById(req.params.id)
  res.json(result)
}

module.exports.update = async (req, res) => {
  let result = await ProductModel.findByIdAndUpdate(req.params.id, req.body)
  res.json(result)
}

module.exports.delete = async (req, res) => {
  let result = await ProductModel.findByIdAndDelete(req.params.id)
  res.json(result)
}

module.exports.remover = async ({}, res) => {
  let result = await ProductModel.deleteMany()
  res.json(result)
}

module.exports.findbyContent = async (req, res) => {
  let result = await ProductModel.find({ name: { $regex: new RegExp(req.params.name, 'i') } })
  res.json(req.params)
}


/**
let ProductModel = require('../models/product.model');

// Create a new product
module.exports.create = async (req, res) => {
    const product = new ProductModel(req.body);
    let result = await product.save();
    res.json(result);
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