import React from "react";

const categories = [
  "Tech",
  "AI / ML",
  "Career",
  "Web Dev",
  "App Dev",
  "Projects",
  "Startups",
];

const AboutCC = () => {
  return (
    <>
      <section className="circle-section hero">
        {/* Left side text content */}
        <div className="circle-text">
          <h2>What is Code Chronicles</h2>
          <p>
            Code Chronicles is your gateway to exploring a wide range of tech
            topics — from cutting-edge AI innovations to hands-on real-world
            projects. Each category serves as a hub of insights, tutorials, and
            practical experiences, thoughtfully curated to help you learn,
            build, and grow as a developer and tech enthusiast.
          </p>
          {/* <button className="explore-btn">Start Reading</button> */}
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
              <div className="item" style={{ "--i": index }} key={index}>
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCC;
