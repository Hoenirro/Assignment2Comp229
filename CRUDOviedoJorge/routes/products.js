var express = require('express');
var router = express.Router();
var productController = require('../controllers/product.controller')

/* GET users listing. */
router
  .get('/:id', productController.findBID)
  //.get('/', productController.findAll)
  .post('/', productController.save)
  .put('/:id', productController.update)
  .delete('/:id', productController.delete)
  .delete('/', productController.remover)

// Handle a GET request, keep the req, and res, send them to the respective route
router.get('/', (req, res) => {
  // Check if the 'name' query parameter is present in the request
  if (req.query.name) {
    // If 'name' is present, use the 'findbyContent' function
    productController.findbyContent(req, res);
  } else {
    // If 'name' is not present
    productController.findAll(req, res);
  }
});

module.exports = router;