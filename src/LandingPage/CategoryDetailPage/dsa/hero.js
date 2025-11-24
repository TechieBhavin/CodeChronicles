import React from "react";
import "./hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();
  
    const handleblog = () => {
      navigate("/categories/dsa/blog");
    };
  return (
    <>
      <div className="container text-center  hero">
        <h1 className="fw-bold">DSA</h1>
        {/* <p className="text-muted">Browse by subject</p> */}

        {/* <div className="col text-center d-flex justify-content-center flex-wrap gap-4"> */}
          <div className="card" onClick={handleblog}>
            <div className="card-body">
              <p class="title-text">Introduction to arrays</p>
              <p className="text-muted card-text">
                An array is a collection of items of the same variable type that
                are stored at contiguous memory locations. It is one of the most
                popular and simple data structures used in programming.In an
                array, all the elements or their references are stored in
                contiguous memory locations. This allows for efficient access
                and manipulation of elements.
              </p>
            </div>
          </div>
          <div className="card" onClick={handleblog}>
            <div className="card-body">
              <p class="title-text">Introduction to arrays</p>
              <p className="text-muted card-text">
                An array is a collection of items of the same variable type that
                are stored at contiguous memory locations. It is one of the most
                popular and simple data structures used in programming.In an
                array, all the elements or their references are stored in
                contiguous memory locations. This allows for efficient access
                and manipulation of elements.
              </p>
            </div>
          </div>
          <div className="card" onClick={handleblog}>
            <div className="card-body">
              <p class="title-text">Introduction to arrays</p>
              <p className="text-muted card-text">
                An array is a collection of items of the same variable type that
                are stored at contiguous memory locations. It is one of the most
                popular and simple data structures used in programming.In an
                array, all the elements or their references are stored in
                contiguous memory locations. This allows for efficient access
                and manipulation of elements.
              </p>
            </div>
          </div>
          <div className="card" onClick={handleblog}>
            <div className="card-body">
              <p class="title-text">Introduction to arrays</p>
              <p className="text-muted card-text">
                An array is a collection of items of the same variable type that
                are stored at contiguous memory locations. It is one of the most
                popular and simple data structures used in programming.In an
                array, all the elements or their references are stored in
                contiguous memory locations. This allows for efficient access
                and manipulation of elements.
              </p>
            </div>
          </div>
          <div className="card" onClick={handleblog}>
            <div className="card-body">
              <p class="title-text">Introduction to arrays</p>
              <p className="text-muted card-text">
                An array is a collection of items of the same variable type that
                are stored at contiguous memory locations. It is one of the most
                popular and simple data structures used in programming.In an
                array, all the elements or their references are stored in
                contiguous memory locations. This allows for efficient access
                and manipulation of elements.
              </p>
            </div>
          </div>
        
      </div>
    </>
  );
}

export default Hero;
