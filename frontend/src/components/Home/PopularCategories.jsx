import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const JobPositionsByIndustry = () => {
  const jobPositions = [
    {
      id: 1,
      title: "Graphic Designer",
      subTitle: "305 Open Positions",
      icon: <MdOutlineDesignServices />,
      background: "linear-gradient(to right, #f39c12, #e74c3c)",
    },
    {
      id: 2,
      title: "Mobile App Developer",
      subTitle: "500+ Open Positions",
      icon: <TbAppsFilled />,
      background: "linear-gradient(to right, #8e44ad, #9b59b6)",
    },
    {
      id: 3,
      title: "Frontend Developer",
      subTitle: "200+ Open Positions",
      icon: <MdOutlineWebhook />,
      background: "linear-gradient(to right, #3498db, #2980b9)",
    },
    {
      id: 4,
      title: "Full Stack Developer",
      subTitle: "1000+ Open Positions",
      icon: <FaReact />,
      background: "linear-gradient(to right, #16a085, #1abc9c)",
    },
    {
      id: 5,
      title: "Accountant",
      subTitle: "150+ Open Positions",
      icon: <MdAccountBalance />,
      background: "linear-gradient(to right, #2ecc71, #27ae60)",
    },
    {
      id: 6,
      title: "AI Engineer",
      subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
      background: "linear-gradient(to right, #f1c40f, #f39c12)",
    },
    {
      id: 7,
      title: "Animator",
      subTitle: "50+ Open Positions",
      icon: <MdOutlineAnimation />,
      background: "linear-gradient(to right, #d35400, #e67e22)",
    },
    {
      id: 8,
      title: "Game Developer",
      subTitle: "80+ Open Positions",
      icon: <IoGameController />,
      background: "linear-gradient(to right, #9b59b6, #8e44ad)",
    },
  ];

  const styles = {
    container: {
      textAlign: "center",
      margin: "50px auto",
      padding: "20px",
      maxWidth: "1200px",
    },
    heading: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#2c3e50",
      marginBottom: "30px",
    },
    banner: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "30px",
      padding: "10px",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "25px",
      textAlign: "center",
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      background: "#fff",
      position: "relative",
      overflow: "hidden",
    },
    cardHover: {
      transform: "translateY(-10px)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    },
    icon: {
      fontSize: "50px",
      color: "white",
      marginBottom: "15px",
      zIndex: 2,
      position: "relative",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#fff",
      marginBottom: "10px",
      transition: "color 0.3s ease",
      zIndex: 2,
      position: "relative",
    },
    subTitle: {
      fontSize: "14px",
      color: "#fff",
      zIndex: 2,
      position: "relative",
    },
    cardBackground: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "inherit",
      zIndex: 1,
      transition: "transform 0.3s ease",
    },
    cardBackgroundHover: {
      transform: "scale(1.1)",
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>JOB POSITIONS BY INDUSTRY</h3>
      <div style={styles.banner}>
        {jobPositions.map((position) => (
          <div
            style={styles.card}
            key={position.id}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, styles.cardHover);
              e.currentTarget.querySelector('.background').style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, { transform: "translateY(0)", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" });
              e.currentTarget.querySelector('.background').style.transform = "scale(1)";
            }}
          >
            <div className="background" style={{ ...styles.cardBackground, background: position.background }}></div>
            <div style={styles.icon}>{position.icon}</div>
            <div>
              <p style={styles.title}>{position.title}</p>
              <p style={styles.subTitle}>{position.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPositionsByIndustry;
