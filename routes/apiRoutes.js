var express = require('express');
var router = express.Router();
const Products = require('../models/products');

// GET /api/v1/
router.get('/', async function(req, res, next) {
  // const response = await Products.find({});
  // res.status(200).json(response);
  throw new Error("This is an error");
  

});

module.exports = router;
