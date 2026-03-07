const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({

date:String,

slots:[
{
time:String,
available:Boolean
}
]

})

module.exports = mongoose.model("Slot",slotSchema)