import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="container">
      <div className="card" style={{ textAlign: "center" }}>
        <h1>🎉 Event Platform</h1>

        <p style={{ margin: "15px 0", fontSize: "16px" }}>
          Create events, manage capacity, and RSVP securely.
        </p>

        <p style={{ marginBottom: "20px", color: "#555" }}>
          Built with MERN Stack (MongoDB, Express, React, Node.js)
        </p>

        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/register">
            <button style={{ backgroundColor: "#16a34a" }}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
