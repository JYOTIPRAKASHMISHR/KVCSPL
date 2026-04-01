import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import googleLogo from "../assets/google.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, database } from "../firebase";
import { ref, set } from "firebase/database";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  // ✅ NEW STATES
  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ LOAD REMEMBERED EMAIL
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");
    if (savedEmail) {
      setForm((prev) => ({ ...prev, email: savedEmail }));
      setRemember(true);
    }
  }, []);

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ VALIDATION + LOGIN (EMAIL/PASSWORD)
  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }

    setError("");

    if (remember) {
      localStorage.setItem("rememberEmail", form.email);
    } else {
      localStorage.removeItem("rememberEmail");
    }

    // 👉 Fake login (replace later with Firebase email login)
    alert("Login Successful");

    // ✅ REDIRECT
    navigate("/dashboard");
  };

  // ✅ GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await set(ref(database, "users/" + user.uid), {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        provider: "google",
      });

      // ✅ REDIRECT AFTER GOOGLE LOGIN
      navigate("/dashboard");

    } catch (error) {
      console.error(error);
      setError("Google login failed");
    }
    setLoading(false);
  };

  return (
    <>
      {/* 🔥 ANIMATION WRAPPER */}
      <motion.div
        className="login-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* LEFT */}
        <motion.div
          className="login-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <img src={logo} alt="Logo" />
          <h1>KUMUDVASAN CONSULTANCY</h1>
          <p>Manage your projects and collaborate with our expert team.</p>
        </motion.div>

        {/* RIGHT */}
        <div className="login-right">
          <motion.div
            className="login-card"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Welcome Back</h2>
            <p>Login to continue</p>

            {/* ERROR */}
            {error && <div className="error">{error}</div>}

            {/* FORM */}
            <form onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />

              {/* REMEMBER ME */}
              <div className="remember">
                <label>
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                  />
                  <span>Remember me</span>
                </label>
              </div>

              <button className="login-btn">Login</button>
            </form>

            {/* DIVIDER */}
            <div className="divider">
              <span>OR</span>
            </div>

            {/* GOOGLE */}
            <button onClick={handleGoogleLogin} className="google-btn">
              <img src={googleLogo} alt="Google" />
              {loading ? "Signing in..." : "Continue with Google"}
            </button>

            <div className="login-footer">
              Don’t have an account?{" "}
              <span onClick={() => navigate("/register")}>Sign up</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Login;