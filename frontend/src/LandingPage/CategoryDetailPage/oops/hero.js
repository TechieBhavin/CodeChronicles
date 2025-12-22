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
        <h1 className="text-center mb-4">Object Oriented Programming</h1>
        
        <div className="blogs-grid">
          {data.map((item, index) => (
            <div
              className="blog-card"
              key={index}
              onClick={() => navigate(`/categories/oops/blog/${item.slug}`)}
            >
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
