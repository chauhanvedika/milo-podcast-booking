const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId:{
    type:String,
    required:true
  },
  podcastType:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  date:{
    type:String,
    required:true
  },
  timeSlot:{
    type:String,
    required:true
  },
  status:{
    type:String,
    default:"confirmed"
  }
},{
  timestamps:true
});

module.exports = mongoose.model("Booking", bookingSchema);