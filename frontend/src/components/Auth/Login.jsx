import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage: "url('https://img.freepik.com/premium-photo/creative4-job-search-background_670147-15323.jpg')", // Background image
          backgroundSize: "cover", // Ensures the image covers the whole background
          backgroundPosition: "center", // Centers the image
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "30px",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background with slight opacity
            boxShadow: "0 4px 12px rgba(10, 10, 11, 0.2)", // Lighter shadow
            borderRadius: "8px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h3>Login to your account</h3>
          </div>
          <form>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>Login As</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
              >
                <option value="">Select Role</option>
                <option value="Job Seeker">Job Seeker</option>
                <option value="Employer">Employer</option>
              </select>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <Link to={"/register"} style={{ color: "#007bff" }}>
                Register Now
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
