import React from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";
import { categories } from "./categories.js";

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center my-5 hero">
      <h1 className="fw-bold">Categories</h1>
      <p className="text-muted">Browse by subject</p>

      <div className="row text-center d-flex justify-content-center flex-wrap gap-4">
        {/* ✅ Auto Generate Cards */}
        {categories.map((item, index) => (
          <div
            className="card"
            style={{ width: "18rem", cursor: "pointer" }}
            key={index}
            onClick={() => navigate(item.link)}
          >
            <div className="card-body">
              <h2 className="title-text">{item.name}</h2>
              <p className="title-info">{item.desc}</p>

              <button
                onClick={() => navigate(item.link)}
                className="explore-btn-featured"
              >
                Explore {item.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
