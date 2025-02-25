
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState({}); // Use an object to manage quantity for each cart item
  
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/cartdata`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        setCart(response.data);

        // Initialize quantity for each product
        const initialQuantities = {};
        response.data.forEach((item) => {
          initialQuantities[item._id] = 1; // Default quantity as 1
        });
        setQuantity(initialQuantities);
      } catch (e) {
        console.error(e);
      }
    };
    fetchCart();
  }, []);

  const handleIncrease = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : prev[id], // Ensure quantity doesn't go below 1
    }));
  };

  const handleDelete = async (id) => {
    axios.delete(`${import.meta.env.VITE_APP_API_URL}/cartdata/${id}`);
   window.location.reload();
};

   const navigate=useNavigate();
   const handleBuyNow = async (totalPrice) => {
    try {
      const data = {
        price:`${totalPrice}`, 
        status: 'Pending',
      };
      const token = localStorage.getItem('authToken');
      const res=await axios.post(`${import.meta.env.VITE_APP_API_URL}/Transactions`, data,{
       headers: {
         'Content-Type': 'application/json', 
          Authorization: `${token}`,
       },
      });
        alert('buy procees completed')
        navigate('/Transaction');
    } 
    catch (error) {
      // Handle error
       console.error('Error creating transaction:', error);
       alert('some problem to buy proccess')
    }
  };

  return (
    <>
      {cart.length > 0 ? (
        cart.map((item) => {
          const totalPrice = item.price * quantity[item._id];
          return (
            <div className="cart-item-container" key={item._id}>
              {/* Left Section - Product Image */}
              <div className="cart-item-image-section">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
              </div>

              {/* Right Section - Product Details */}
              <div className="cart-item-details-section">
                <h2 className="cart-item-name">{item.name}</h2>
                <p className="cart-item-description">{item.description}</p>
                <p className="cart-item-price">
                  Price: ₹{item.price} x {quantity[item._id]} = ₹{totalPrice}
                </p>
                <div className="cart-item-rating">
                  <span>⭐ {item.rating} / 5</span>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button
                      onClick={() => handleDecrease(item._id)}
                      className="quantity-button"
                    >
                      -
                    </button>
                    <span className="quantity-value">
                      {quantity[item._id]}
                    </span>
                    <button
                      onClick={() => handleIncrease(item._id)}
                      className="quantity-button"
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-buttons">
                    <button
                      className="cart-delete-button"
                      onClick={() => handleDelete(item.userid)}
                    >
                      Delete
                    </button>
                    <button
                      className="cart-buy-now-button"
                      onClick={() => handleBuyNow(totalPrice)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p style={{ textAlign: 'center', minHeight: '500px', marginTop: '50px' }}>
          No Cart Data
        </p>
      )}
    </>
  );
};

export default Cart;
