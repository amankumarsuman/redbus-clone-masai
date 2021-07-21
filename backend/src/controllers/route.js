const Route = require("../models/route");
const Bus = require("../models/bus");
const Booking = require("../models/booking");
exports.getAllRoutes = async (req, res) => {
  let routes = await Route.find().lean().exec();
  res.send(routes);
};

// get route,buses and available seats
exports.getOneRoute = async (req, res) => {
  let departure = req.params.departure;
  let arrival = req.params.arrival;
  let date = req.params.date;

  // get the relevant route
  let route = await Route.find({
    $and: { departureLocation: departure, arrivalLocation: arrival },
  })
    .lean()
    .exec();

  // get all buses for this route
  let availableBuses = await Bus.find({ routes: route._id }).lean().exec();

  const busIdWithBookedSeats = {};

  // get the seats booked for each matched buses
  availableBuses.forEach((bus) => {
    const bookings = await Booking.find({
      $and: { "departureDetails.date": date, busId: bus._id },
    })
      .lean()
      .exec();
    bookings.forEach((booking) => {
      currentBusSeats = [...currentBusSeats, ...booking.seats];
    });
    busIdWithBookedSeats[bus._id.toString()] = currentBusSeats;
  });
  res.send({
    route: route,
    availableBuses: availableBuses,
    busIdWithBookedSeats,
  });
};
