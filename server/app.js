const express = require("express");
const cors = require("cors");

const app = express();

/**
 * 🔴 CORS CONFIG — MUST BE FIRST
 */
app.use(
  cors({
    origin: "https://event-platform-project-alpha.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.use(express.json());

// 🔴 ROUTES
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/events", require("./routes/event.routes"));
app.use("/api/rsvp", require("./routes/rsvp.routes"));

app.get("/", (req, res) => {
  res.json({ message: "API running" });
});

module.exports = app;
