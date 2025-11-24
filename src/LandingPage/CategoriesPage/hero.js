import React from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

const CategoriesPage = () => {
  const navigate = useNavigate();

  const handledsa = () => {
    navigate("/categories/dsa");
  };
  const handleoops = () => {
    navigate("/categories/oops");
  };
  const hanldecn = () => {
    navigate("/categories/cn");
  };
  const handleos = () => {
    navigate("/categories/os");
  };

  return (
    <div className="container text-center my-5 hero">
      <h1 className="fw-bold">Categories</h1>
      <p className="text-muted">Browse by subject</p>

      <div className="row text-center d-flex justify-content-center flex-wrap gap-4">
        
        <div className="card" style={{ width: "18rem" }} onClick={handledsa}>
          <div className="card-body">
            <h2 class="title-text">DSA</h2>
            <p className="title-info">Data structures and algorithms</p>
            <button onClick={handledsa} className="explore-btn-featured ">
              Explore DSA
            </button>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }} onClick={hanldecn}>
          <div className="card-body">
            <h2 class="title-text">CN</h2>
            <p className="title-info">Computer networks</p>
            <button onClick={hanldecn} className="explore-btn-featured ">
              Explore CN
            </button>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }} onClick={handleoops}>
          <div className="card-body">
            <h2 class="title-text">OOPs</h2>
            <p className="title-info">Object oriented programming</p>
            <button onClick={handleoops} className="explore-btn-featured ">
              Explore OOPs
            </button>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }} onClick={handleos}>
          <div className="card-body">
            <h2 class="title-text">OS</h2>
            <p className="title-info">Operating system</p>
            <button onClick={handleos} className="explore-btn-featured ">
              Explore OS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
