// src/components/NotFound.js
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center" style={{ padding: "50px 0" }}>
      <div
        className="error-icon"
        style={{ fontSize: "100px", color: "orange" }}
      >
        <i className="fas fa-exclamation-triangle"></i>
      </div>
      <h1 className="display-3">404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>

      <Link
        to="/"
        className="btn"
        style={{
          backgroundColor: "#7AB730",
          color: "#fff",
          fontSize: "16px",
          padding: "10px 20px",
        }}
      >
        Back To Home
      </Link>
    </div>
  );
}

export default NotFound;
