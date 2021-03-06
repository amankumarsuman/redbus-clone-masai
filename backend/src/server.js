const express = require("express");
const app = express();
app.use(express.json());

const connect = require("./config/db");
const busController = require("./controllers/busController");
const bookingController = require("./controllers/booking");
const customerController = require("./controllers/customer");
const routeController = require("./controllers/route");
const dropBoardPointController = require("./controllers/dropBoardPoint");
app.use("/api/booking", bookingController);
app.use("/api/customers", customerController);
app.use("/api/routes", routeController);
app.use("/api/bus", busController);
app.use("/api/location", dropBoardPointController);

const start = async () => {
  await connect();
  app.listen(8000, () => console.log("Listening at Port 8000"));
};
start();
