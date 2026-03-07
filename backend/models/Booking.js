const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

date:String,

timeSlot:String,

package:String,

status:{
type:String,
default:"booked"
}

})

module.exports = mongoose.model("Booking",bookingSchema)