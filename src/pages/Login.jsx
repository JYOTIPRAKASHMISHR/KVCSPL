import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import googleLogo from "../assets/google.png"; // 🔴 Add Google logo image
import { signInWithPopup } from "firebase/auth";
import { auth, provider, database } from "../firebase";
import { ref, set } from "firebase/database";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await set(ref(database, "users/" + user.uid), {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        provider: "google",
      });

      alert("Login Successful");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <style>{`
        .login-page {
          display: flex;
          height: 100vh;
          font-family: Inter, sans-serif;
        }

        /* LEFT */
        .login-left {
          flex: 1;
          background: linear-gradient(135deg, #0f2b5b, #1e40af);
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px;
        }

        .login-left img {
          width: 80px;
          margin-bottom: 20px;
        }

        .login-left h1 {
          font-size: 36px;
          margin-bottom: 12px;
        }

        .login-left p {
          font-size: 16px;
          opacity: 0.9;
          max-width: 420px;
        }

        /* RIGHT */
        .login-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f9fafb;
        }

        .login-card {
          background: #fff;
          padding: 40px;
          width: 380px;
          border-radius: 16px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.08);
        }

        .login-card h2 {
          font-size: 28px;
          margin-bottom: 6px;
        }

        .login-card p {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 22px;
        }

        .login-card input {
          width: 100%;
          padding: 14px;
          margin-bottom: 16px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          font-size: 15px;
        }

        .login-card input:focus {
          border-color: #2563eb;
          outline: none;
        }

        .login-btn {
          width: 100%;
          padding: 14px;
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .login-btn:hover {
          background: #1e40af;
        }

        /* Divider */
        .divider {
          display: flex;
          align-items: center;
          margin: 20px 0;
          color: #9ca3af;
          font-size: 13px;
        }

        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: #e5e7eb;
        }

        .divider span {
          margin: 0 10px;
        }

        /* Google Button */
        .google-btn {
          width: 100%;
          padding: 13px;
          background: #7296e9ff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: 0.3s;
        }

        .google-btn img {
          width: 20px;
        }

        .google-btn:hover {
          background: #f3f4f6;
        }

        .login-footer {
          text-align: center;
          margin-top: 18px;
          font-size: 14px;
        }

        .login-footer span {
          color: #2563eb;
          font-weight: 600;
          cursor: pointer;
        }

        .login-footer span:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .login-page {
            flex-direction: column;
          }

          .login-left {
            padding: 40px;
            text-align: center;
          }
        }
      `}</style>

      <div className="login-page">
        {/* LEFT */}
        <div className="login-left">
          <img src={logo} alt="Logo" />
          <h1>KUMUDVASAN CONSULTANCY & SERVICES PVT LTD</h1>
          <p>
            Securely login to manage your projects, track progress, and
            collaborate with our expert team.
          </p>
        </div>

        {/* RIGHT */}
        <div className="login-right">
          <div className="login-card">
            <h2>Welcome Back</h2>
            <p>Please login to continue</p>

            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />

            <button className="login-btn">Login</button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button onClick={handleGoogleLogin} className="google-btn">
              <img src={googleLogo} alt="Google" />
              Continue with Google
            </button>

            <div className="login-footer">
              Don’t have an account?{" "}
              <span onClick={() => navigate("/register")}>Sign up</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
