import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/dashboard")}>
        🎉 Event Platform
      </h2>

      <div className="nav-right">
        <span>Welcome, {user?.name}</span>

        
        <button onClick={() => navigate("/create")}>
          + Create Event
        </button>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
