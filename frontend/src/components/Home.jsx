import React, { useState,useEffect } from "react";
import CategorySection from "./Categories";
import Carousel from 'better-react-carousel'
import {useNavigate,useLocation} from "react-router-dom"
import axios from "axios";

const HomePage = () => {
   const [products, setProducts] = useState([]);
   const [filteredProducts, setFilteredProducts] = useState([]);
   const navigate=useNavigate();
   const location = useLocation();
  const searchQuery = location.state || "";
  
// ================== Api call for product data ===================
  useEffect(() => {
    const fetchproduct =async() => {
      try {   
         const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/productdata`);
         setProducts(response.data);
         setFilteredProducts(response.data);
       } 
       catch (error) {
        console.error("Error fetching data:", error);
       }
      }
      fetchproduct();
   },[]);


   //===================== apply search filter ===================
    
  const handleSearch = () => {
    if (searchQuery.trim()) {
      const filteredResults = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filteredResults);
    } else {
      setFilteredProducts(products);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

 //=============== view more click handle ======================  
    function handleclick(product){
     navigate('/Productdetails', { state: { product} });
    }


  return (
    <div className="homepage">

            <CategorySection/>

       {/* Hero Section with Carousel */}

       <div className="hero-section">
        <Carousel cols={1} rows={1} loop >
        <Carousel.Item >
        <img width="100%"  src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/54b578159b0db6ae.jpg?q=20" />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/f29e90d0b3e1c6e1.jpg?q=20" />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/54f94d29aa080c9c.jpg?q=20" />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/f60e8b357631bb35.jpeg?q=20" />
        </Carousel.Item>
      {/* ... */}
      </Carousel>
     </div>

      {/* Product Section */}
      <div className="product-section">
        <h2>Electronics</h2>
        <div className="product-grid">
        {filteredProducts.map((product) => (product.category=='Electronics'?(
            <div key={product.id} className="product-card" onClick={()=>handleclick(product)}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p> Under <i class="fa-solid fa-indian-rupee-sign"></i>{product.price} </p>
            </div>
          ):(<></>)
          ))}
        </div>
      </div>
      {/* ========== top offers section ======== */}
      <div className="product-section">
        <h2>Fashion</h2>
        <div className="product-grid">
          {filteredProducts.map((product) => (product.category=='Fashion'?(
            <div key={product.id} className="product-card" onClick={()=>handleclick(product)}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p> Under <i class="fa-solid fa-indian-rupee-sign"></i>{product.price} </p>
            </div>
          ):(<></>)
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
