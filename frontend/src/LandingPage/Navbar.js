import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css"; // Import the CSS file for styling
 

function Navbar() {

    const navigate = useNavigate();

  const handleprofile = () => {
    navigate("/my-profile"); // redirect to Categories page
  };


  return (
    
    <div className="page-container">
   {<nav className="bg-white shadow-sm mt-3 mb-4 hero" style={{ borderRadius: "12px" }}>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0.8rem 2rem",
        }}
      >
        {/* Left - Logo */}
        {/* <Link className="fw-bold fs-4 text-dark text-decoration-none" to="/">
          TechieBhavin
        </Link> */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/media/logo.png"
            alt="code chronicles Logo"
            className="logo-img"
          />
        </Link>

        {/* Center - Links */}
        <ul className="d-flex list-unstyled m-0 gap-4">
          <li>
            <Link className="cattext" to="/Home">
              Home
            </Link>
          </li>
          <li>
            <Link className="cattext" to="/categories">
               Categories
            </Link>
          </li>
          
          <li>
            <Link className="cattext" to="/about">
              About us
            </Link>
          </li>
           <li>
            <Link className="cattext" to="/login">
              Login
            </Link>
          </li>
           
        </ul>

        {/* Right - Buttons */}
        <div className="d-flex gap-2">
          <button className="btn btn-outline-dark rounded-pill" onClick={handleprofile}><AccountCircleIcon /> </button>
          {/* <button className="btn btn-dark rounded-pill px-3">Hire Me</button> */}
        </div>
      </div>
    </nav>}
</div>
  );
}

export default Navbar;
