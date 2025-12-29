const express = require("express");
const cors = require("cors");

const app = express();

/**
 * ✅ CORS — SAFE FOR NODE v22
 */
app.use(
  cors({
    origin: "https://event-platform-project-alpha.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ THIS IS THE MISSING PIECE
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

// routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/events", require("./routes/event.routes"));
app.use("/api/rsvp", require("./routes/rsvp.routes"));

app.get("/", (req, res) => {
  res.json({ message: "API running" });
});

module.exports = app;
