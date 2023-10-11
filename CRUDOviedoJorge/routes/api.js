var express = require('express');
var router = express.Router();


var usersRouter = require('./users');
router.use('/users', usersRouter);

var productsRouter = require('./products');
router.use('/products', productsRouter);

module.exports = router;