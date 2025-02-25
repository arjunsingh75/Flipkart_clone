const express = require('express');
const app = express();
const productdata = require('./routes/products');
const Register = require('./routes/Register');
const carddata=require( './routes/carddata');
const Transactions=require('./routes/Transactions')
const bodyparser = require('body-parser');
require('./conn/db');
const cors = require('cors');
require('dotenv').config();


// // Middleware
app.use(cors()); 
app.use(bodyparser.json()); 

// Routes
app.get('/',(req,res)=>{
    res.send("hello");
})
app.use('/productdata', productdata);
app.use('/register', Register);
app.use('/cartdata',carddata);
app.use('/Transactions',Transactions)


// Server
port=4000;
app.listen(port, () => {
    console.log("Server is listening ");
});

