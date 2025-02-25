const express = require('express');
const Transaction = require('../model/TransactionSchema');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET; 

//check authorization
const authenticate = (req, res, next) => {
   const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');
    try {
      const verified = jwt.verify(token, JWT_SECRET);
      req.user = {
        id: verified.id || verified.user?.id,
       };
      next();
    } 
    catch (err)
    {
      res.status(400).send('Token expired or invalid');
    }
  };
// POST route to create a new transaction
router.post('/', authenticate, async (req, res) => {
  try {

     const data = req.body;
     data.userid=req.user.id;
    // Create a new transaction instance
    const newTransaction = new Transaction(data);

    // Save the transaction to the database
    await newTransaction.save();

    // Respond with the created transaction
    res.status(201).json(newTransaction);
  }
   catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET route to get all transactions
router.get('/', async (req, res) => {
  try {
    // Retrieve all transactions from the database
    const transactions = await Transaction.find();

    // Respond with the transactions
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
