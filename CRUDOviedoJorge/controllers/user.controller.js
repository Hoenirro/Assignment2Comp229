let UserModel = require('../models/user.model');

module.exports.save = async (req, res) => {
    const user = new UserModel(req.body);
    let result = await user.save();
    res.json(result)
}

module.exports.find = async (req, res) => {
    let result = await UserModel.findById(req.params.id)
    res.json(result)
}