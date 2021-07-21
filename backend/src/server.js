const express = require("express");
const app = express();

app.use(express.json());

const connect = require("./config/db");

app.use(busServiceRoutes);

const start = async () => {
  await connect();
  app.listen(8000, () => console.log("Listening at Port 8000"));
};
start();
