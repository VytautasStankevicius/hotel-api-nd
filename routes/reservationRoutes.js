const express = require('express');
const router = express.Router({ mergeParams: true });
const reservationControler = require("../controlers/reservationControler");

router.route("/")
  .get(reservationControler.getReservationsByHotelAndRoom)
  .post(reservationControler.createReservation);

module.exports = router;