const mongoose = require('mongoose');


/*
This is the schema for the products given in the challenge
but the response from the API is not in the same format as the schema
so I have to change the schema to match the response
*/

const ImageSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  url: { type: String, default: '' },
  order: { type: Number, default: 0 }
});


const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  an: { type: String, required: true },
  merchantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Merchant', required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  des: { type: String, required: true },
  order: { type: Number, default: 0 },
  price: { type: Number, required: true },
  isHidden: { type: Boolean, default: false },
  choice: { type: Array, default: [] },
  eTime: { type: String, default: '' },
  maxQty: { type: Number, default: 0 },
  sTime: { type: String, default: '' },
  status: { type: Boolean, default: true },
  image: { type: [ImageSchema], default: [] },
  discount: { type: Number, default: 0 }
});
module.exports = mongoose.model('Products', ProductSchema);
