import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const fetchEvents = async () => {
    const res = await api.get("/events");
    setEvents(res.data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleRsvp = async (eventId) => {
    try {
      await api.post(`/rsvp/${eventId}`);
      alert("RSVP successful 🎉");
      fetchEvents();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div>
     
      <Navbar />

      <div className="container">
       
        <h2>Available Events</h2>

        <div style={{ margin: "20px 0" }}>
          <button onClick={() => navigate("/create")}>
            + Create New Event
          </button>
        </div>

        <div className="event-grid">
          {events.length === 0 && <p>No events available</p>}

          {events.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              onRsvp={handleRsvp}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
