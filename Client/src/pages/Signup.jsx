import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/user/create-user",
        {
          name,
          email,
          password,
        }
      );
      if (response.data.success) {
        navigate("/login");
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Signup</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "1rem",
  },
  heading: {
    fontSize: "1.5rem", // text-2xl
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  error: {
    color: "red",
  },
  formGroup: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    color: "#4a5568", // gray-700
  },
  input: {
    border: "1px solid #cbd5e0", // border
    borderRadius: "0.25rem", // rounded
    width: "100%",
    padding: "0.5rem 0.75rem",
  },
  button: {
    backgroundColor: "#4299e1", // blue-500
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
  },
};
