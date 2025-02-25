import React from "react";

const FooterBootstrap = () => {
    const heading={
        color:'gray'
    }
    const width={
        width:"150px",
         
    }
  return (
    <footer style={{backgroundColor:'rgb(17, 36, 65)',paddingTop:'40px',color:"#ffff"}}>
      <div className="container">
        <div style={{display:'flex',fontSize:'13px',gap:"20px",fontWeight:'400'}}>
          {/* ABOUT Section */}
          <div style={width}>
            <p style={heading}>ABOUT</p>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Flipkart Stories</a></li>
              <li><a href="#" className="text-light text-decoration-none">Press</a></li>
              <li><a href="#" className="text-light text-decoration-none">Corporate Information</a></li>
            </ul>
          </div>

          {/* GROUP COMPANIES Section */}
          <div style={width}>
            <p style={heading}>GROUP COMPANIES</p>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Myntra</a></li>
              <li><a href="#" className="text-light text-decoration-none">Cleartrip</a></li>
              <li><a href="#" className="text-light text-decoration-none">Shopsy</a></li>
            </ul>
          </div>

          {/* HELP Section */}
          <div style={width} >
            <p style={heading} >HELP</p>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Payments</a></li>
              <li><a href="#" className="text-light text-decoration-none">Shipping</a></li>
              <li><a href="#" className="text-light text-decoration-none">Cancellation & Returns</a></li>
              <li><a href="#" className="text-light text-decoration-none">FAQ</a></li>
            </ul>
          </div>

          {/* CONSUMER POLICY Section */}
          <div style={width}>
            <p style={heading}>CONSUMER POLICY</p>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Cancellation & Returns</a></li>
              <li><a href="#" className="text-light text-decoration-none">Terms Of Use</a></li>
              <li><a href="#" className="text-light text-decoration-none">Security</a></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy</a></li>
              <li><a href="#" className="text-light text-decoration-none">Sitemap</a></li>
              <li><a href="#" className="text-light text-decoration-none">Grievance Redressal</a></li>
              <li><a href="#" className="text-light text-decoration-none">EPR Compliance</a></li>
            </ul>
          </div>
        

        {/* Mail Us & Registered Office Address */}
        <div style={{display:"flex",justifyContent:"space-around",paddingLeft:"10px"}} >
          <div className="col-md-5 mb-4">
            <p style={heading} >Mail Us</p>
            <p>
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103, Karnataka, India
            </p>
          </div>
          <div className="col-md-5 mb-4">
            <p style={heading}>Registered Office Address</p>
            <p>
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103, Karnataka, India<br />
              CIN: U51109KA2012PTC066107<br />
              Telephone: 044-45614700 / 044-67415800
            </p>
           </div>
         </div>
        </div>
        {/* Additional Links */}
        <div className="row mt-4 border-top pt-3">
          <div className="col-md-6 mb-3">
            <a href="#" className="text-light text-decoration-none me-4">Become a Seller</a>
            <a href="#" className="text-light text-decoration-none me-4">Advertise</a>
            <a href="#" className="text-light text-decoration-none me-4">Gift Cards</a>
            <a href="#" className="text-light text-decoration-none">Help Center</a>
          </div>
          <div className="col-md-6 text-end">
            <p>© 2007-2025 Flipkart.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBootstrap;
