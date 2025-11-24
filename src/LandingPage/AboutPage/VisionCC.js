import React from "react";
import "./VisionCC.css";

const AboutCC = () => {
  return (
    <>
      <section className="circle-section hero">
        {/* Right side circle visualization */}
        <div className="circle-wrapper">
           <img
            src="/media/vision.png"
            alt="code chronicles Logo"
            className="logo-img-vision"
          />
        </div>

       

        {/* Left side text content */}
        <div className="circle-text">
          <h2> Our Vision</h2>
          <p>
            To become one of the most trusted online spaces for tech learners —
            bridging the gap between theory and real-world implementation
            through practical content, collaboration, and creativity.
          </p>
          {/* <button className="explore-btn">Start Reading</button> */}
        </div>
      </section>
    </>
  );
};

export default AboutCC;
