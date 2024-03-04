const mongoose = require("mongoose")

const reservationSchema = new mongoose.Schema({
    roomNr: {
        type: mongoose.Schema.ObjectId,
        ref: "Room",
        required: [true, 'Reservation must have a room number']
    },
    from: {
        type: Date,
        required: [true, 'Reservation must have a starting time']
    },
    to: {
        type: Date,
        required: [true, 'Reservation must have an ending time']
    }, 
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    }, 
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref: "Hotel",
        required: [true, 'Reservation must be linked to a hotel']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, 'Resevation must be linked to a user']
    }
})

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation