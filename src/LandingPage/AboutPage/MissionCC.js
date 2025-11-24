import React from "react";

 

const AboutCC = () => {
  return (
    <>
      <section className="circle-section hero">
        {/* Left side text content */}
        <div className="circle-text">
          <h2> Our Mission</h2>
          <p>
            Our mission is to simplify technology learning through
            well-researched, easy-to-understand, and experience-driven blogs.
            Whether it’s web development, AI, machine learning, app development,
            AR, or career growth — CodeChronicles is here to help you stay
            informed, inspired, and ready to build.
          </p>
          {/* <button className="explore-btn">Start Reading</button> */}
        </div>

        {/* Right side circle visualization */}
        <div className="circle-wrapper">
           <img
            src="/media/mission.png"
            alt="code chronicles Logo"
            className="logo-img-vision"
          />
        </div>
      </section>
    </>
  );
};

export default AboutCC;
