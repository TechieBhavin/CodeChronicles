import React from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profile-container hero">
      {/* Header */}
      <div className="profile-header hero">
        <div className="profile-left">
          <img src="/media/vision.png" alt="Profile" className="profile-img" />
          <div className="profile-info">
            <h2>Techie Bhavin</h2>
            <p className="username">@techie.bhavin</p>

            <div className="social-links">
              <div className="mt-4">
                <a
                  href="https://github.com/TechieBhavin"
                  className="me-3 fs-4 text-dark"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/patelbhavin0205/"
                  className="me-3 fs-4 text-primary"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://x.com/Bhavin0325" className="fs-4 text-info">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-right">
          <p>
            <strong>Email:</strong> techie.bhavin@gmail.com
          </p>
          <p>
            <strong>Location:</strong> Surat, India
          </p>
          <p>
            <strong>Technical Skills:</strong> Java, React.js, Node.js, Flutter
          </p>
        </div>
      </div>

      {/* Progress Section */}
      {/* <div className="progress-section">
        <h3>Overall Progress</h3>
        <div className="progress-grid">
          <div className="progress-card">
            <h4>A2Z Sheet</h4>
            <p>Progress: 21/455 (5%)</p>
            <div className="progress-bar">
              <div className="bar-fill" style={{ width: "5%" }}></div>
            </div>
          </div>

          <div className="progress-card">
            <h4>SDE Sheet</h4>
            <p>Progress: 1/191 (1%)</p>
            <div className="progress-bar">
              <div className="bar-fill" style={{ width: "1%" }}></div>
            </div>
          </div>

          <div className="progress-card">
            <h4>Blind 75</h4>
            <p>Progress: 3/77 (4%)</p>
            <div className="progress-bar">
              <div className="bar-fill" style={{ width: "4%" }}></div>
            </div>
          </div>

          <div className="progress-card">
            <h4>LeetCode</h4>
            <p>Problems Solved: 434 / 3705</p>
            <p>Easy: 129 | Medium: 236 | Hard: 69</p>
          </div>
        </div>
      </div> */}

      {/* Topics Covered */}
      {/* <div className="topics-section">
        <h3>Topics Covered</h3>
        <div className="topics-list">
          <span>Arrays</span>
          <span>Recursion</span>
          <span>Sorting</span>
          <span>Hashing</span>
          <span>Two Pointers</span>
          <span>Binary Search</span>
        </div>
      </div> */}

      {/* Bottom Section */}
      {/* <div className="share-section">
        <button className="share-btn">Share Your Profile</button>
      </div> */}
    </div>
  );
};

export default ProfilePage;
