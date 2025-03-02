import React,{useState,useEffect} from "react";
import { Link ,useNavigate} from "react-router-dom";
import Logo from "../assest/Flipkart.jpg"
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('authToken');   
    if (token) {
      setIsLoggedIn(true);      
    }
  }, []);

    const navigate=useNavigate();
    // Handle logout
   const handleLogout = () => {
    localStorage.clear(); 
    setIsLoggedIn(false);  
  };
// handle change 
function handleInputChange(e){
  const query = e.target.value;
   setSearchQuery(query);
   navigate("/", { state: { searchQuery } });
}

  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo" >
        <img src={Logo} alt="flipkart logo" />
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
          <input
             type="text"
             className="search-input"
             placeholder="Search for products, brands and more"
             value={searchQuery}
             onChange={handleInputChange}
          />
         <div className="search-button" onClick={()=>handleclick()}>
             <i className="fa-solid fa-magnifying-glass"></i>
         </div>
      </div>

      {/* Options Section */}
      <div className="navbar-options">
        <Link className="navbar-btn" to='/'>
        <i className="fa-solid fa-house"></i> Home
        </Link>
        {!isLoggedIn ? (
        <Link className="navbar-btn" to='/Login'>
          Login
        </Link>
        ):(
          <Link className="navbar-btn" onClick={handleLogout} to='/'>
          Logout
        </Link>
        )
        }
        <Link className="navbar-btn" to='/Transaction'>
           Transactions
        </Link>
        <Link className="navbar-btn" to='/Cartdata'>
        <i className="fa-solid fa-cart-shopping"></i> Cart
        </Link>
       </div>
    </div>
  );
};

export default Navbar;
