const express = require('express');
const router = express.Router()
const hotelControler = require('../controlers/hotelControler');
const authControler = require('./../controlers/authControler');
const reviewRouter = require('./../routes/reviewRoutes');
const reservationRouter = require('./../routes/reservationRoutes');
 
router
.route('/top-5-best')
.get(hotelControler.aliasTopHotels, hotelControler.getAllHotels)
router
.route('/')
.get(authControler.protect,hotelControler.getAllHotels)
.post(hotelControler.checkBody, hotelControler.createHotel)
router
.route('/:id')
.get(hotelControler.getHotel)
.patch(hotelControler.updateHotel)
.delete(
    authControler.protect,
    authControler.restrictTo('admin'),
    hotelControler.deleteHotel
    )
router.route('/:hotelId/reviews', reviewRouter)
router.route('/:hotelId/:roomId/reservations', reservationRouter);

module.exports = router;