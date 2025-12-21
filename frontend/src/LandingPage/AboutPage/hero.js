import React from "react";
import "./hero.css";

const hero = () => {
  return (
    <div className="about-container hero">
      <section className="about-section hero">
        <h2>What is Code Chronicles</h2>
        <p>
          Code Chronicles is your gateway to exploring a wide range of tech
          topics — from cutting-edge AI innovations to hands-on real-world
          projects. Each category serves as a hub of insights, tutorials, and
          practical experiences, thoughtfully curated to help you learn, build,
          and grow as a developer and tech enthusiast.
        </p>
      </section>
      <section className="about-section hero">
        <h2>Our Story</h2>
        <p>
          <strong>CodeChronicles</strong> was created with one goal in mind — to
          build a home for tech enthusiasts, developers, and learners who want
          to grow together. It’s more than just a blog platform; it’s a digital
          space that captures the journey behind every line of code — the ideas,
          the challenges, and the lessons learned along the way.
        </p>
      </section>

      {/* CTA Section */}
      <section className="cta-section hero">
        <h3>Join the Journey 🚀</h3>
        <p>
          Whether you're a beginner, a professional, or a creator — you have a
          story worth sharing. Be a part of the CodeChronicles community and
          inspire the next generation of developers.
        </p>
        <button className="explore-btn">Explore Blogs</button>
        <button className="explore-btn m-3">Become Publisher</button>
      </section>
    </div>
  );
};

export default hero;
