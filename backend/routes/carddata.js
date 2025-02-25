const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();
const Cardproduct=require('../model/CardSchema');
const jwt=require('jsonwebtoken');
require('dotenv').config();

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
    catch (err) {
      res.status(400).send('Token expired or invalid');
    }
  };

router.post('/',authenticate,async(req,res)=>{
    try{
      const data=req.body;
      data.userid=req.user.id;
      const Addtocard= new Cardproduct(data);
      await Addtocard.save();
      res.status(200).json({Message:"Cardproduct succesfull"}); 
  }
  catch(e){
    res.status(500).json({Message:"Cardproduct time error "});
  }
})

router.get('/',authenticate, async(req,res)=>{
    try{  
      const data = await Cardproduct.find({ userid:req.user.id});  
        if(data){
            res.json(data);
        }
        else{
            res.status(500).json({Message:" data not found"});
        }
    }
    catch(e)
    {
        console.error(e);
    }
})

module.exports=router;