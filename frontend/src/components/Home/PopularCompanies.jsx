import React from "react";
import { FaChartLine, FaUserCheck, FaBriefcase } from "react-icons/fa";

const JobPortalInsights = () => {
  const insights = [
    {
      id: 1,
      title: "Top-Searched Jobs",
      description: "Find out the roles most sought after by professionals this year.",
      icon: <FaChartLine />,
    },
    {
      id: 2,
      title: "Active Users",
      description: "Join a growing network of over 3 million job seekers.",
      icon: <FaUserCheck />,
    },
    {
      id: 3,
      title: "Successful Placements",
      description: "Celebrating 1.5M+ job placements across various industries.",
      icon: <FaBriefcase />,
    },
  ];

  return (
    <div className="insights-section">
      <div className="container">
        <h3>Explore Job Portal Insights</h3>
        <div className="card-grid">
          {insights.map((item) => (
            <div className="insight-card" key={item.id}>
              <div className="card-header">
                <div className="icon">{item.icon}</div>
                <h4>{item.title}</h4>
              </div>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .insights-section {
          background: #f9f9f9;
          padding: 80px 20px;
          text-align: center;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        h3 {
          font-size: 2.5rem;
          margin-bottom: 50px;
          color: #1a202c;
        }
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }
        .insight-card {
          background: white;
          border-radius: 15px;
          padding: 20px 25px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .insight-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }
        .card-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }
        .icon {
          font-size: 3rem;
          color: #3182ce;
        }
        h4 {
          font-size: 1.5rem;
          color: #2d3748;
        }
        .description {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default JobPortalInsights;
