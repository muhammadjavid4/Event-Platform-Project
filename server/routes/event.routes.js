const express = require("express");
const router = express.Router();

const {
  createEvent,
  getAllEvents,
  deleteEvent
} = require("../controllers/event.controller");

const auth = require("../middlewares/auth.middleware");

router.get("/", getAllEvents);
router.post("/", auth, createEvent);
router.delete("/:id", auth, deleteEvent);

module.exports = router;
