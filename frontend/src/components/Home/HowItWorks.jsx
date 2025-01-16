import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
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
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: "20px",
      flexWrap: "wrap",
    },
    card: {
      flex: "1 1 calc(33% - 20px)", // Responsive: 3 cards per row, reduces on smaller screens
      maxWidth: "300px",
      padding: "20px",
      background: "#ecf0f1",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
    },
    icon: {
      fontSize: "48px",
      color: "#e74c3c",
      marginBottom: "15px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#34495e",
      marginBottom: "10px",
    },
    description: {
      fontSize: "16px",
      color: "#7f8c8d",
      lineHeight: "1.5",
    },
  };

  return (
    <>
      <div style={styles.container}>
        <h3 style={styles.heading}>How Career Connect Works!</h3>
        <div style={styles.banner}>
          {/* Card 1 */}
          <div
            style={styles.card}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, { transform: "scale(1)", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" })
            }
          >
            <FaUserPlus style={styles.icon} />
            <p style={styles.title}>Create Account</p>
            <p style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, culpa.
            </p>
          </div>
          {/* Card 2 */}
          <div
            style={styles.card}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, { transform: "scale(1)", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" })
            }
          >
            <MdFindInPage style={styles.icon} />
            <p style={styles.title}>Find a Job/Post a Job</p>
            <p style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, culpa.
            </p>
          </div>
          {/* Card 3 */}
          <div
            style={styles.card}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, { transform: "scale(1)", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" })
            }
          >
            <IoMdSend style={styles.icon} />
            <p style={styles.title}>Apply For Job/Recruit Suitable Candidates</p>
            <p style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, culpa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
