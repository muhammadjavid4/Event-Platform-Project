export default function EventCard({ event, onRsvp }) {
  const isFull = event.attendeesCount >= event.capacity;

  return (
    <div className="card">
      <h3>{event.title}</h3>
      <p>
        Seats: {event.attendeesCount} / {event.capacity}
      </p>

      <button
        disabled={isFull}
        onClick={() => onRsvp(event._id)}
        style={{
          backgroundColor: isFull ? "#aaa" : "#2563eb",
          cursor: isFull ? "not-allowed" : "pointer"
        }}
      >
        {isFull ? "Event Full" : "RSVP"}
      </button>
    </div>
  );
}
