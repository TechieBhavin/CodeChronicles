import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <h1 className="auth-title">Welcome Back 👋</h1>
        <p className="auth-subtitle">
          Sign in to continue to <b>Code Chronicles</b>
        </p>

        <form className="auth-form">
          <input
            type="email"
            placeholder="Email address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button
            type="button"
            className="auth-primary"
            onClick={() => navigate("/profile")}
          >
            Sign In
          </button>
        </form>

        <div className="auth-divider">or</div>

        <p className="auth-footer">
          Don’t have an account?
          <span onClick={() => navigate("/register")}>
            {" "}Create one
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;
