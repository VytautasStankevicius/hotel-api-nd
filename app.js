const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json())
const hotelRoutes = require('./routes/hotelRoutes')
const userRoutes = require('./routes/userRoutes')
const morgan = require('morgan')
const reviewRoutes = require('./routes/reviewRoutes')
const roomRouters = require('./routes/roomRoutes')
const reservationRouters = require('./routes/reservationRoutes')

app.use(morgan('dev'));
//Mounting router
app.use('/api/v1/hotels',hotelRoutes);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/reviews', reviewRoutes)
app.use('/api/v1/rooms', roomRouters)
app.use('/api/v1/reviews', reservationRouters)

module.exports = app;
 

