import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-wrapper">
      <div className="notfound-card">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>

        <p className="error-desc">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="error-actions">
          <button
            className="primary-btn"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/categories")}
          >
            Browse Categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
