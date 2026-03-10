const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

/* ------------------ BOOK SLOT ------------------ */

router.post("/book-slot", async (req, res) => {

  try {

    const booking = new Booking(req.body);

    await booking.save();

    res.status(201).json({
      message: "Slot booked successfully",
      booking
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


/* ------------------ AVAILABLE SLOTS ------------------ */

router.get("/available-slots/:date", async (req, res) => {

  try {

    const { date } = req.params;

    const allSlots = [
      "10AM-11AM",
      "11AM-12PM",
      "12PM-1PM",
      "2PM-3PM",
      "3PM-4PM",
      "4PM-5PM",
      "5PM-6PM",
      "6PM-7PM",
      "7PM-8PM",
      "8PM-9PM"
    ];

    // find bookings for the selected date
    const bookedSlots = await Booking.find({ date });

    // extract booked slot times
    const booked = bookedSlots.map(b => b.timeSlot);

    // filter available slots
    const availableSlots = allSlots.filter(slot => !booked.includes(slot));

    res.json({
      date,
      availableSlots
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


module.exports = router;