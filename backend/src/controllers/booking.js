const Booking = require("../models/booking");
const express = require("express");
const router = express.Router();
const addBooking = async (req, res) => {
  // code here
  const booking = await Booking.create(req.body);
  //console.log(booking);
  res.send(booking);
};
const getBooking = async (req, res) => {
  // code here
  let { id } = req.params;
  const bookings = await Booking.find().lean().exec();
  let filteredBookings = bookings.filter(
    (booking) => booking.customerId.toString() == id
  );
  res.send(filteredBookings);
};
router.post("/v1/api/booking", addBooking);
router.get("/v1/api/booking/:id", getBooking);
module.exports = router;
