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
  let result = await ProductModel.find({ name: { $regex: new RegExp(req.query.name, 'i') } })
  res.json(result)
}

