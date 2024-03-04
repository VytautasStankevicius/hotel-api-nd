const express = require('express');
const router = express.Router({ mergeParams:true } );
const roomControler = require("../controlers/roomControler")


router.route("/room")
.get( roomControler.getAllRooms)
.post( roomControler.createRoom)

module.exports = router