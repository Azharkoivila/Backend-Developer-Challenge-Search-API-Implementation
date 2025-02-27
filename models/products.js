const mongoose = require('mongoose');


/*
This is the schema for the products given in the challenge
but the response from the API is not in the same format as the schema
so I have to change the schema to match the response
*/
const ProductSchema = new mongoose.Schema({
  merchantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Merchant',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  order: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  image: [{
    url: {
      type: String,
      required: true
    },
    order: {
      type: Number,
      required: true,
      default: 0
    }
  }],
  discount: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Products', ProductSchema);
