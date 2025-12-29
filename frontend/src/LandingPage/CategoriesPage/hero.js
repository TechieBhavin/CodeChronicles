import React from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";
import { categories } from "./categories.js";

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-5 hero featured-wrapper">
      <h1 className="fw-bold text-center">Categories</h1>
      <p className="text-muted text-center">Browse by subject</p>

      <div className="row text-center d-flex justify-content-center flex-wrap gap-4">
       
        <div className="categories-grid">
        {categories.map((item, index) => (
          <div
            className="category-card"
            key={index}
            onClick={() => navigate(item.link)}
            
          >
            <div className="icon-wrapper">
              <span className="category-icon">{item.icon}</span>
            </div>

            <h2 className="category-title">{item.name}</h2>
            <p className="category-desc">{item.desc}</p>

            <div className="category-link">
              Explore <span>→</span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
