const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema({
    roomNr: {
        type: Number,
        required: [true, "Room must have a number"]
    },
    description: {
        type: String,
        requiered: [true, "Room must have a description"]
    },
    photo:{
      type:String,
      required: [true, "Room must have a photo"]
    },
    comesWith: {
        type: String,
        enum:["Parking", "Wi-fi", "Meals"]
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref: "Hotel",
        required: [true, 'Which hotel is this review about?']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, 'Which user is this linked to?']
    }
})

const Room = mongoose.model("Room", roomSchema);

module.exports = Room