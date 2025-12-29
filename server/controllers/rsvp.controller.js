const mongoose = require("mongoose");
const Event = require("../models/Event");
const RSVP = require("../models/RSVP");

exports.rsvpEvent = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const event = await Event.findById(req.params.eventId).session(session);

    if (!event) {
      throw new Error("Event not found");
    }

    // ✅ capacity check (CORRECT WAY)
    if (event.attendeesCount >= event.capacity) {
      throw new Error("Event full");
    }

    // ✅ increment count
    event.attendeesCount += 1;
    await event.save({ session });

    // ✅ create RSVP (duplicate prevented by unique index)
    await RSVP.create(
      [{ user: req.user.id, event: event._id }],
      { session }
    );

    await session.commitTransaction();
    res.json({ message: "RSVP successful" });

  } catch (err) {
  await session.abortTransaction();

  // duplicate RSVP error
  if (err.code === 11000) {
    return res.status(400).json({
      message: "You have already RSVP’d for this event"
    });
  }

  res.status(400).json({
    message: err.message || "RSVP failed"
  });
} finally {
  session.endSession();
}

};
