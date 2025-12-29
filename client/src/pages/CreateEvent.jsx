import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [capacity, setCapacity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !capacity) {
      alert("Please fill all fields");
      return;
    }

    await api.post("/events", { title, capacity });
    alert("Event created successfully 🎉");
    navigate("/dashboard");
  };

  return (
    <div>
     
      <Navbar />

      <div className="container">
     
        <button
          onClick={() => navigate("/dashboard")}
          style={{ marginBottom: "15px" }}
        >
          ⬅ Back to Dashboard
        </button>

        <div className="card">
          <h2>Create Event</h2>

          <form onSubmit={handleSubmit}>
            <input
              placeholder="Event Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="number"
              placeholder="Capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />

            <button>Create Event</button>
          </form>
        </div>
      </div>
    </div>
  );
}
