const Booking = require("../models/booking");
const express = require("express");
const router = express.Router();
const addBooking = async (req, res) => {
  const booking = await Booking.create(req.body);
  res.send(booking);
};
const getBooking = async (req, res) => {
  let { id } = req.params;
  const booking = await Booking.find({ _id: id }).lean().exec();
  res.send(booking);
};
const getAllBooking = async (req, res) => {
  const bookings = await Booking.find().lean().exec();

  res.send(bookings);
};
router.post("/", addBooking);
router.get("/", getAllBooking);
router.get("/:id", getBooking);
module.exports = router;
