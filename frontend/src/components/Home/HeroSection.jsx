import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Jobs",
      icon: <FaSuitcase />,
      background: "#f8f9fa", // Light background for simplicity
      color: "#2980b9", // Consistent brand color
    },
    {
      id: 2,
      title: "91,220",
      subTitle: "Companies",
      icon: <FaBuilding />,
      background: "#ecf0f1", // Lighter background for less contrast
      color: "#e74c3c",
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
      background: "#fff", // Neutral background
      color: "#2ecc71",
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
      background: "#f9f9f9", // Soft off-white
      color: "#f39c12",
    },
  ];

  return (
    <>
      <div className="heroSection">
        <div className="heroContent">
          <h1>Find Your Dream Job</h1>
          <p>
            Explore thousands of job opportunities tailored to your skills and
            aspirations. Your next big career move starts here.
          </p>
          <button className="ctaButton">Get Started</button>
        </div>
        <div className="details">
          {details.map((element) => (
            <div
              className="card"
              key={element.id}
              style={{
                background: element.background,
                borderColor: element.color,
                color: element.color,
              }}
            >
              <div className="icon" style={{ color: element.color }}>
                {element.icon}
              </div>
              <div className="content">
                <p className="title">{element.title}</p>
                <p className="subtitle">{element.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .heroSection {
          background: #34495e;
          color: white;
          padding: 80px 20px;
          text-align: center;
        }
        .heroContent h1 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 15px;
        }
        .heroContent p {
          font-size: 1.2rem;
          margin-bottom: 30px;
        }
        .ctaButton {
          background: #2980b9;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .ctaButton:hover {
          background: #3498db;
          transform: scale(1.1);
        }
        .details {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          margin-top: 50px;
        }
        .card {
          background: #fff;
          color: #333;
          border-radius: 10px;
          padding: 20px;
          width: 220px;
          border: 2px solid transparent;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        .icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .content .title {
          font-size: 1.6rem;
          font-weight: bold;
        }
        .content .subtitle {
          font-size: 1.1rem;
          color: #666;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
