const express = require("express");
const app = express();
app.use(express.json());

const connect = require("./config/db");
const busServiceController = require("./controllers/busService");
const busController = require("./controllers/busController");
const bookingController = require("./controllers/booking");
const customerController = require("./controllers/customer");
const routeController = require("./controllers/route");
app.use("/api/busservice", busServiceController);
app.use("/api/booking", bookingController);
app.use("/api/customers", customerController);
app.use("/api/routes", routeController);
app.use("/api/bus", busController);

const start = async () => {
  await connect();
  app.listen(8000, () => console.log("Listening at Port 8000"));
};
start();
