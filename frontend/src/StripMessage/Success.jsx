import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎉 Payment Successful!</h1>
      <p style={styles.text}>
        Thank you for your purchase. Your payment has been processed successfully.
      </p>

      <Link to="/" style={styles.button}>
        Go back to Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "60px 20px",
  },
  title: {
    fontSize: "2.2rem",
    fontWeight: "bold",
  },
  text: {
    fontSize: "1.1rem",
    marginTop: "10px",
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#635bff",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
  },
};

export default Success;
