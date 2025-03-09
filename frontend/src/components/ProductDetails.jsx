
import React,{useState} from "react";
import { useLocation ,useNavigate} from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const { product } = location.state 

  const [Cart,setCart]=useState({
    name:`${product.name}`,
    description:`${product.description}`,
    rating:`${product.rating}`,
    image:`${product.image}`,
    price:`${product.price}`
  });


  const handleclick =async()=>{
      try{
         const token = localStorage.getItem('authToken');
         const res=await axios.post(`${import.meta.env.VITE_APP_API_URL}/cartdata`, Cart,{
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
         });
         alert('Add to Cartdata success');
         navigate('/Cartdata');
         
      }
      catch(e){
          console.error(e);
      }
   }

   const handleBuyNow=()=>{
    alert("redirect to buy now page")
   }



  return (
  <div className="product-details-container">
    {/* Left Section - Product Image and Buttons */}
    <div className="product-image-section">
       <img
        src={product.image}
        alt={product.name}
        className="product-image"
       />
       <div className="product-buttons">
         <button
          className="add-to-cart-button"
          onClick={() => handleclick()}
         >
          Add to Cart
         </button>
         <button
          className="buy-now-button"
           onClick={() => handleBuyNow()}
         >
          Buy Now
         </button>
        </div>
      </div>

    {/* Right Section - Product Details */}
    <div className="product-details-section">
      <h1 className="product-name">{product.name}</h1>
      <p className="product-description">{product.description}</p>
      <p className="product-price">₹{product.price}</p>
      <div className="product-rating">
        <span>⭐ {product.rating} / 5</span>
      </div>
      <div className="product-stock">
        {product.stock > 0 ? (
          <span>In Stock</span>
        ) : (
          <span className="out-of-stock">Out of Stock</span>
        )}
      </div>
      <h4>Features</h4>
      <ul className="product-features">
        {product.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  </div>
);

}

export default ProductDetails;