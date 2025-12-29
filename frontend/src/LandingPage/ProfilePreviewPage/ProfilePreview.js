import "./profilePreview.css";
import { useNavigate } from "react-router-dom";

const ProfilePreview = () => {
  const navigate = useNavigate();

  return (
    <div className="preview-container">

      {/* PROFILE LOCKED CARD */}
      <div className="preview-card">
        <img
          src="/avatar-placeholder.png"
          alt="guest"
          className="preview-avatar"
        />

        <h2>Guest User</h2>
        <p className="preview-role">Not Signed In</p>

        <div className="locked-overlay">
          🔒 Profile Locked
        </div>
      </div>

      {/* FEATURE PREVIEW */}
      <div className="feature-preview">
        <h3>Unlock your Code Chronicles profile</h3>

        <div className="feature-grid">
          <div className="feature-box">
            ✍️ Publish your blogs
          </div>
          <div className="feature-box">
            🔖 Save & bookmark articles
          </div>
          <div className="feature-box">
            📊 Author dashboard
          </div>
          <div className="feature-box">
            🚀 Become a publisher
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="preview-actions">
        <button
          className="primary"
          onClick={() => navigate("/login")}
        >
          Sign In
        </button>

        <button
          className="secondary"
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>
      </div>

    </div>
  );
};

export default ProfilePreview;
