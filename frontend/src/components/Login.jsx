import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import axios from "axios";
const LoginPage = () => {
 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    //  Basic validation
    if (!formData.email || !formData.password) {
      setError("Please fill out both fields.");
      return;
    }

    setError(""); // Clear previous errors

    try {
      const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/Register/login`, formData);
      const { token, user } = res.data;
      localStorage.setItem('authToken', token); 
      localStorage.setItem('user', JSON.stringify(user)); 
      navigate("/"); // Redirect to home
      window.location.reload();
  } catch (err) {
      alert(err.response?.data?.message || 'Error logging in');
      
  }
  };



  return (
    <div style={{height:'85vh',width:'70vw',margin:'20px auto',boxShadow:'0px 3px 5px gray'}}>
      <div className="row h-100">
        {/* Left Section */}
        <div className="col-md-5 bg-primary text-white d-flex flex-column align-items-center" style={{justifyContent:"space-around"}} >
         <div style={{padding:"0px 20px"}}>
         <h1 className="mb-3">Login</h1>
          <p className=" mb-4" style={{fontSize:"20px"}}>
            Get access to your Orders, Wishlist, and Recommendations
          </p>
         </div>
          <img
            src="https://th.bing.com/th/id/R.bcaed2483788a001e1b8b032ea906f27?rik=vGmsHFueWU7b5w&riu=http%3a%2f%2f4.bp.blogspot.com%2f-VUh4P9IAaIs%2fUzmr30k4AhI%2fAAAAAAAABRo%2f3d-hslTNsIU%2fs1600%2fcloud.jpg&ehk=zbbTp9WSQHp1T%2b%2fUligZZR5IWrLNz72PzN%2b3lZlZU1Y%3d&risl=&pid=ImgRaw&r=0"
            alt="Illustration"
            height='150px'
          />
        </div>

        {/* Right Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center" >
          <form className="w-75 mx-auto" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-danger">{error}</p>}

            <p className="small text-muted">
              By continuing, you agree to Flipkart's{" "}
              <a href="#" className="text-primary text-decoration-none">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary text-decoration-none">
                Privacy Policy
              </a>.
            </p>

            {/* Submit Button */}
            <button type="submit" className="btn btn-warning w-100">
              Login
            </button>
            <p className="text-center mt-3">
              New to Flipkart?{" "}
              <Link to="/Register" className="text-primary text-decoration-none">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
