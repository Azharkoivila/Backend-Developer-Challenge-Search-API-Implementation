const express = require('express');
const router = express.Router();
const Products = require('../models/products');

// get all products
router.get('/products', async function(req, res, next) {
  const {title, category, price} = req.query;             //for now only these three query params are  used we can add more by use case
  const query = {};
  // if query params are present then add them to query object
  if(title) query.title = title;
  if(category) query.category = category;
  if(price) query.price = price;
  let response = Products.find(query);
  // pagination
  const page= parseInt(req.query.page) || 1;
  const skip = (page- 1) * 10;
  response = response.skip(skip).limit(10);
  const Product = await response;
  console.log(Product.length);
  res.status(200).json(Product);
});

module.exports = router;
