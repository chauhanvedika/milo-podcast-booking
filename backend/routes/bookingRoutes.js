const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/book",async(req,res)=>{

const booking = new Booking(req.body)

await booking.save()

res.json({message:"Slot booked successfully"})

})

router.get("/all",async(req,res)=>{

const bookings = await Booking.find().populate("userId")

res.json(bookings)

})

module.exports = router