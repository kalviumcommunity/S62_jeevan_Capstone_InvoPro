import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.flexContainer}>
          <h1 style={styles.title}>InvoPro</h1>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <NavLink to="/" style={styles.link} className={styles.linkHover}>
              Home
            </NavLink>
            <NavLink
              to="/login"
              style={styles.link}
              className={styles.linkHover}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              style={styles.link}
              className={styles.linkHover}
            >
              Signup
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const styles = {
  navbar: {
    backgroundColor: "#2b6cb0", // blue-600
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0",
  },
  title: {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    transition: "color 0.2s",
  },
  linkHover: {
    color: "#ecc94b", // yellow-300
  },
};
