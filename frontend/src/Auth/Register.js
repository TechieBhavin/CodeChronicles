import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <h1 className="auth-title">Create your account 🚀</h1>
        <p className="auth-subtitle">
          Join <b>Code Chronicles</b> and start publishing your stories
        </p>

        <form className="auth-form">
          <input
            type="text"
            placeholder="Full name"
             
          />

          <input
            type="email"
            placeholder="Email address"
             
          />

          <input
            type="password"
            placeholder="Password"
             
          />

          <input
            type="password"
            placeholder="Confirm password"
             
          />

          <button
            type="button"
            className="auth-primary"
            onClick={() => navigate("/login")}
          >
            Create Account
          </button>
        </form>

        <div className="auth-divider">or</div>

        <p className="auth-footer">
          Already have an account?
          <span onClick={() => navigate("/login")}>
            {" "}Sign in
          </span>
        </p>

      </div>
    </div>
  );
};

export default Register;
