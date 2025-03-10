import React from "react";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <div style={{ maxWidth: "768px", margin: "0 auto" }}>
        <h1 style={styles.heading}>Welcome to HomePage</h1>
        <div style={styles.content}>
          <p style={styles.text}>
            This is the main content area of the homepage. You can add more
            components and content here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f7fafc", // gray-100
    padding: "2rem 1rem",
  },
  heading: {
    fontSize: "2.5rem", // text-4xl
    fontWeight: "bold",
    color: "#1a202c", // gray-900
    marginBottom: "2rem",
  },
  content: {
    backgroundColor: "#fff", // white
    borderRadius: "0.5rem", // rounded-lg
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", // shadow
    padding: "1.5rem",
  },
  text: {
    color: "#4a5568", // gray-700
  },
};
