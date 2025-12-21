import React from "react";
import "./CircleLayout.css";
import "./hero.css";

const categories = [
  "Tech",
  "AI / ML",
  "Career",
  "Web Dev",
  "App Dev",
  "Projects",
  "Startups",
];

const CircleLayout = () => {
  return (
    <section className="circle-section">
      {/* Left side text content */}
      <div className="circle-text">
        <h2>Explore Our Blog Universe</h2>
        <p>
          Dive into a wide range of tech topics, from cutting-edge AI to
          real-world projects. Each category represents a hub of insights,
          tutorials, and practical experiences — curated to help you grow as a
          developer and tech enthusiast.
        </p>
        <button className="explore-btn">Start Exploring</button>
      </div>

      {/* Right side circle visualization */}
      <div className="circle-wrapper">
        <div className="circle-container">
          <div className="center">Categories</div>

          {/* Dotted rings */}
        
          <div className="ring ring1"></div>
          <div className="ring ring2"></div>
          <div className="ring ring3"></div>
            <div className="ring ring4"></div>

          {/* Category items */}
          {categories.map((cat, index) => (
            <div className="item cattext" style={{ "--i": index }} key={index}>
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircleLayout;
