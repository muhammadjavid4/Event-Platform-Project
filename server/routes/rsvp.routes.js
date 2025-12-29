const express = require("express");
const router = express.Router();

const { rsvpEvent } = require("../controllers/rsvp.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/:eventId", auth, rsvpEvent);

module.exports = router;
