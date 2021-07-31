const Route = require("../models/route");
const Bus = require("../models/bus");
const Booking = require("../models/booking");
const express = require("express");
const router = express.Router();

const getAllRoutes = async (req, res) => {
  let routes = await Route.find().lean().exec();
  res.send(routes);
};

// get route,buses and available seats
const getOneRoute = async (req, res) => {
  let departure = req.params.departure;
  let arrival = req.params.arrival;
  let date = req.params.date;
  let { sort, order, busType, departureTime } = req.query;
  let val = order == "asc" ? 1 : -1;
  // get the relevant route
  let route = await Route.findOne({
    $and: [
      { "departureLocation.name": departure, "arrivalLocation.name": arrival },
    ],
  })
    .lean()
    .exec();

  // get all buses for this route
  console.log(Number(departureTime));
  let availableBuses = await Bus.find({
    $and: departureTime
      ? [
          {
            routes: route._id,
            busType: busType ? busType : new RegExp(""),
            departureTime: { $gt: Number(departureTime) },
          },
        ]
      : [{ routes: route._id, busType: busType ? busType : new RegExp("") }],
  })
    .sort(sort ? { [sort]: val } : null)
    .lean()
    .exec();

  const busIdWithBookedSeats = {};

  // get the seats booked for each matched buses
  for (let i = 0; i < availableBuses.length; i++) {
    const bookings = await Booking.find({
      $and: [{ "departureDetails.date": date, busId: availableBuses[i]._id }],
    })
      .lean()
      .exec();

    let currentSeats = [];
    bookings.forEach((booking) => {
      currentSeats = [...currentSeats, ...booking.seats];
    });
    busIdWithBookedSeats[availableBuses[i]._id.toString()] = currentSeats;
  }
  res.send({
    route: route,
    availableBuses: availableBuses,
    busIdWithBookedSeats: busIdWithBookedSeats,
  });
};

const addRoute = async (req, res) => {
  const route = await Route.create(req.body);
  res.send({ message: "route added", data: route });
};

router.get("/", getAllRoutes);
router.post("/", addRoute);
router.get("/:departure/:arrival/:date", getOneRoute);

module.exports = router;
