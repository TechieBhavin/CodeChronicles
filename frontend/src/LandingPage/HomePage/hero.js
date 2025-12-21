import React from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

const Home = () => {
  const navigate = useNavigate();
  const exploreblogs = () => {
    navigate("/categories");
  };

  return (
    <div className="container text-center my-5 hero">
      {/* Hero Section */}

      <h1 className="fw-bold">Welcome to CodeChronicles</h1>
      <p className="fw-bold mb-5">Where Every Line Has a Story</p>
      <button onClick={exploreblogs} className="explore-btn">
        Explore Blogs
      </button>
    </div>
  );
};

export default Home;
