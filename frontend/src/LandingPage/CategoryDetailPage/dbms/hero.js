import React from "react";
import "./hero.css";
import { useNavigate } from "react-router-dom";
import data from "./data.js";

const Hero = () => {
  const navigate = useNavigate();

  // const handleblog = () => {
  //   navigate("/categories/dsa/blog");
  // };
  return (
    <>
      <div className="container hero">
        <h1 className="text-center category-title mb-4">Database Management System</h1>
        
        <div className="blogs-grid">
          {data.map((item, index) => (
            <div
              className="blog-card"
              key={index}
              onClick={() => navigate(`/categories/dbms/blog/${item.slug}`)}
            >
                 {/* IMAGE */}
      <div className="blog-image-wrapper">
        <img
          src={item.image}
          alt={item.title}
          className="blog-card-image"
        />
      </div>
              <div className="card-body-2">
                <h2 className="title-text-2">{item.title}</h2>
                <p className="title-info-2">{item.excerpt}</p>
                <p className="blog-category-tag category-text">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </>
  );
};

export default Hero;
