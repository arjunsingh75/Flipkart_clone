const express=require('express');
// const app=express();
const mongoose=require('mongoose');
const products=require('../model/ProductSchema');
const router = express.Router();
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

// function product(){
//  products.create( [
//     {
//       "name": "iPhone 14 Pro",
//       "description": "Apple iPhone 14 Pro with A16 Bionic chip and 6.1-inch Super Retina XDR display.",
//       "price": 129999,
//       "category": "Electronics",
//       "image": "https://th.bing.com/th/id/OIP.RMgSZevhD7HOhlr8MP_9KwAAAA?rs=1&pid=ImgDetMain",
//       "rating": 4.8,
//       "stock": 50,
//       "features": [
//         "A16 Bionic Chip for faster performance",
//         "48 MP main camera with advanced photography features",
//         "6.1-inch Super Retina XDR display with ProMotion",
//         "Face ID for secure authentication",
//         "Supports MagSafe accessories and wireless charging"
//       ]
//     },
//     {
    
//       "name": "Samsung Galaxy S23",
//       "description": "Samsung Galaxy S23 with Snapdragon 8 Gen 2 processor and 120Hz AMOLED display.",
//       "price": 79999,
//       "category": "Electronics",
//       "image": "https://th.bing.com/th/id/OIP.82wrfIXypV2-prI5DaA2UQHaHa?w=850&h=850&rs=1&pid=ImgDetMain",
//       "rating": 4.6,
//       "stock": 100,
//       "features": [
//         "Snapdragon 8 Gen 2 processor for flagship performance",
//         "6.1-inch Dynamic AMOLED 2X display with 120Hz refresh rate",
//         "Triple rear cameras with 50 MP primary sensor",
//         "4500mAh battery with fast charging support",
//         "IP68 water and dust resistance"
//       ]
//     },
//     {
    
//       "name": "Sony Bravia 55-inch Smart TV",
//       "description": "Sony Bravia 4K UHD Smart TV with Dolby Vision and Android TV features.",
//       "price": 64999,
//       "category": "Electronics",
//       "image": "https://th.bing.com/th/id/OIP.54IZ7UtgEgA203M9hTqZggHaHa?w=1600&h=1600&rs=1&pid=ImgDetMain",
//       "rating": 4.5,
//       "stock": 30,
//       "features": [
//         "4K Ultra HD resolution for crystal-clear visuals",
//         "Dolby Vision and Dolby Atmos for immersive sound and picture",
//         "Built-in Google Assistant for voice commands",
//         "Access to Android TV apps like Netflix, Prime Video, and YouTube",
//         "HDR10 support for vibrant color and contrast"
//       ]
//     },
//     {
    
//       "name": "LG Washing Machine 7kg",
//       "description": "LG Fully Automatic Washing Machine with inverter technology.",
//       "price": 22999,
//       "category": "Electronics",
//       "image": "https://th.bing.com/th/id/OIP.TK48oC5wdTlRZPgF_RRLsAHaHa?rs=1&pid=ImgDetMain",
//       "rating": 4.4,
//       "stock": 25,
//       "features": [
//         "7 kg capacity suitable for medium-sized families",
//         "Inverter Direct Drive Technology for energy efficiency",
//         "Multiple wash programs for different fabric types",
//         "Smart Diagnosis to troubleshoot issues via mobile app",
//         "Child Lock feature for safety"
//       ]
//     },
//       {
//         "name": "Nike Air Max Sneakers",
//         "description": "Nike Air Max sneakers with a lightweight design and responsive cushioning for everyday wear.",
//         "price": 4599,
//         "category": "Fashion",
//         "image": "https://th.bing.com/th/id/OIP.RlPzg0iG4X4sDqzdJTBSzgHaHa?rs=1&pid=ImgDetMain",
//         "rating": 4.5,
//         "stock": 150,
//         "features": [
//           "Responsive Air Max cushioning for enhanced comfort",
//           "Stylish design suitable for casual and athletic wear",
//           "Breathable upper material for all-day comfort",
//           "Durable outsole for long-lasting use",
//           "Available in multiple color options"
//         ]
//       },
//       {
//         "name": "Levi's Men's Slim Fit Jeans",
//         "description": "Levi's slim fit jeans made with premium denim for a stylish and comfortable fit.",
//         "price": 1999,
//         "category": "Fashion",
//         "image": "https://th.bing.com/th/id/OIP.GJwkv4uWSdvioOgoDo4p3AHaHa?rs=1&pid=ImgDetMain",
//         "rating": 4.4,
//         "stock": 300,
//         "features": [
//           "Classic slim fit for a tailored look",
//           "Premium stretch denim for flexibility",
//           "5-pocket styling for convenience",
//           "Durable stitching for long-lasting wear",
//           "Available in various washes and sizes"
//         ]
//       },
//       {
//         "name": "Puma Essential T-Shirt",
//         "description": "Puma's essential t-shirt with soft cotton fabric and iconic logo design for casual wear.",
//         "price": 799,
//         "category": "Fashion",
//         "image": "https://th.bing.com/th/id/OIP.o-_bHNwosG6RGkDCUN31JQHaHa?rs=1&pid=ImgDetMain",
//         "rating": 4.2,
//         "stock": 500,
//         "features": [
//           "Soft cotton fabric for all-day comfort",
//           "Iconic Puma logo on the chest",
//           "Crew neck design for a classic look",
//           "Regular fit for easy movement",
//           "Available in multiple colors and sizes"
//         ]
//       },
//       {
//         "name": "Fossil Leather Wallet",
//         "description": "Fossil's premium leather wallet with multiple compartments for cash and cards.",
//         "price": 1299,
//         "category": "Fashion",
//         "image": "https://th.bing.com/th/id/OIP.aalkA9xOuZ4UfKnR0831ZAHaFj?rs=1&pid=ImgDetMain",
//         "rating": 4.6,
//         "stock": 100,
//         "features": [
//           "Made with genuine leather for durability",
//           "Multiple card slots and a coin pocket",
//           "Compact design for easy carrying",
//           "Stylish and professional look",
//           "Available in brown and black variants"
//         ]
//       }   
//   ])
  
// } product(); 


router.get('/', async (req, res) => {
    try {
        const product = await products.find();
        if (product.length>0) {
            res.json(product);
        } 
        else {
            res.status(404).send({ message: '"No" product found' }); 
        }
    } 
    catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).send({ error: 'Internal Server Error' }); 
    }
});

module.exports = router;

