import React from "react";
import { Link } from "react-router-dom";

function Cancel() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>❌ Payment Canceled</h1>
      <p style={styles.text}>
        It looks like your payment didn’t go through.  
        If this was a mistake, you can try again.
      </p>

      <Link to="/checkout" style={styles.button}>
        Try Again
      </Link>

      <Link to="/" style={styles.link}>
        Return to Home
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
    color: "#d9534f",
  },
  text: {
    fontSize: "1.1rem",
    marginTop: "10px",
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 22px",
    backgroundColor: "#d9534f",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  link: {
    display: "block",
    marginTop: "15px",
    textDecoration: "none",
    color: "#635bff",
    fontWeight: "500",
  },
};

export default Cancel;
