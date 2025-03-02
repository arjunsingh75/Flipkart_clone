const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  userid: {
    type:String,
    required:true
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
}, {
  timestamps: true
});



module.exports =  mongoose.model("Cartdata", CartSchema);