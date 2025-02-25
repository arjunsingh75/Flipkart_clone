const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    userid: {
      type:String,
      required:true
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], // Valid status values
      default: 'Pending',
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Transaction = mongoose.model('Transactions', transactionSchema);

module.exports = Transaction;
