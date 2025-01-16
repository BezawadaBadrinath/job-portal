import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(true);
    }
  };

  const navbarStyle = {
    nav: {
      background: "#2c3e50", // Dark background
      color: "#ecf0f1", // Light text
      padding: "15px 20px", // Adjusted padding
      display: isAuthorized ? "flex" : "none",
      justifyContent: "space-between",
      alignItems: "center",
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 1000,
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow for depth
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#ecf0f1",
      textDecoration: "none",
    },
    menu: {
      display: show ? "block" : "flex",
      flexDirection: show ? "column" : "row",
      listStyle: "none",
      gap: "20px",
      margin: 0,
      padding: 0,
      alignItems: "center",
    },
    menuItem: {
      color: "#ecf0f1",
      textDecoration: "none",
      fontSize: "18px",
      padding: "5px 10px",
      transition: "color 0.3s ease",
    },
    menuItemHover: {
      color: "#e74c3c", // Hover color
    },
    hamburger: {
      fontSize: "24px",
      cursor: "pointer",
      color: "#ecf0f1",
      display: "none",
    },
    button: {
      background: "#e74c3c",
      border: "none",
      padding: "10px 20px",
      color: "#fff",
      cursor: "pointer",
      borderRadius: "4px",
      fontSize: "16px",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      background: "#c0392b",
    },
  };

  return (
    <nav style={navbarStyle.nav}>
      <Link to="/" style={navbarStyle.logo}>
        JobCareer
      </Link>
      <ul style={navbarStyle.menu}>
        <li>
          <Link to="/" style={navbarStyle.menuItem} onClick={() => setShow(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/job/getall"
            style={navbarStyle.menuItem}
            onClick={() => setShow(false)}
          >
            All Jobs
          </Link>
        </li>
        <li>
          <Link
            to="/applications/me"
            style={navbarStyle.menuItem}
            onClick={() => setShow(false)}
          >
            {user && user.role === "Employer"
              ? "Applicant's Applications"
              : "My Applications"}
          </Link>
        </li>
        {user && user.role === "Employer" && (
          <>
            <li>
              <Link
                to="/job/post"
                style={navbarStyle.menuItem}
                onClick={() => setShow(false)}
              >
                Post Job
              </Link>
            </li>
            <li>
              <Link
                to="/job/me"
                style={navbarStyle.menuItem}
                onClick={() => setShow(false)}
              >
                Your Jobs
              </Link>
            </li>
          </>
        )}
        <button
          onClick={handleLogout}
          style={navbarStyle.button}
          onMouseEnter={(e) => (e.target.style.background = "#c0392b")}
          onMouseLeave={(e) => (e.target.style.background = "#e74c3c")}
        >
          Logout
        </button>
      </ul>
      <div
        style={{
          ...navbarStyle.hamburger,
          display: window.innerWidth <= 768 ? "block" : "none",
        }}
        onClick={() => setShow(!show)}
      >
        {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
