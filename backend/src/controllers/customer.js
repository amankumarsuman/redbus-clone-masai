const Customer = require("../models/customer");
const express = require("express");
const router = express.Router();

// create new customer
const addNewCustomer = async (req, res) => {
  let email = req.body.email;
  let existingCustomer = await Customer.findOne({ email: email }).lean().exec();
  if (existingCustomer) {
    res.send({ message: "Already Registered", existingCustomer });
  } else {
    let newCustomer = await Customer.create(req.body);
    res.send(newCustomer);
  }
};
const getCustomers = async (req, res) => {
  let customers = await Customer.find().lean().exec();
  res.send(customers);
};
router.post("/", addNewCustomer);
router.get("/", getCustomers);
module.exports = router;
