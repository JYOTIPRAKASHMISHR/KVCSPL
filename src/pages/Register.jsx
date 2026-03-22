import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../firebase";
import { ref, set } from "firebase/database";



const handleRegister = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await set(ref(database, "users/" + user.uid), {
      name,
      email,
      uid: user.uid,
      provider: "email",
    });

    alert("Registration Successful");
  } catch (error) {
    console.error(error.message);
  }
};

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .register-page {
          display: flex;
          height: 100vh;
          font-family: Inter, sans-serif;
        }

        /* LEFT */
        .register-left {
          flex: 1;
          background: linear-gradient(135deg, #0f2b5b, #1e40af);
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px;
        }

        .register-left img {
          width: 80px;
          margin-bottom: 20px;
        }

        .register-left h1 {
          font-size: 36px;
          margin-bottom: 12px;
        }

        .register-left p {
          font-size: 16px;
          opacity: 0.9;
          max-width: 420px;
        }

        /* RIGHT */
        .register-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f9fafb;
        }

        .register-card {
          background: #fff;
          padding: 40px;
          width: 400px;
          border-radius: 16px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.08);
        }

        .register-card h2 {
          font-size: 28px;
          margin-bottom: 6px;
        }

        .register-card p {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 24px;
        }

        .register-card input {
          width: 100%;
          padding: 14px;
          margin-bottom: 16px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          font-size: 15px;
        }

        .register-card input:focus {
          border-color: #2563eb;
          outline: none;
        }

        .register-btn {
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

        .register-btn:hover {
          background: #1e40af;
        }

        .register-footer {
          text-align: center;
          margin-top: 18px;
          font-size: 14px;
        }

        .register-footer span {
          color: #2563eb;
          font-weight: 600;
          cursor: pointer;
        }

        .register-footer span:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .register-page {
            flex-direction: column;
          }

          .register-left {
            padding: 40px;
            text-align: center;
          }
        }
      `}</style>

      <div className="register-page">
        {/* LEFT */}
        <div className="register-left">
          <img src={logo} alt="Logo" />
          <h1>KUMUDVASAN CONSULTANCY & SERVICES PVT LTD</h1>
          <p>
            Create your account to start working with our team and manage your
            projects efficiently.
          </p>
        </div>

        {/* RIGHT */}
        <div className="register-right">
          <div className="register-card">
            <h2>Create Account</h2>
            <p>Please fill the details to register</p>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />

            <button className="register-btn">Register</button>

            <p className="register-footer">
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Login</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
