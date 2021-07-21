const Customer = require("../models/customer");
const express = require("express");
const router = express.Router();

// create new customer
const addNewCustomer = async (req, res) => {
  let email = req.body.email;
  let existingCustomer = await Customer.findOne({ email: email }).lean().exec();
  if (existingCustomer) {
    res.send(existingCustomer);
  } else {
    let newCustomer = await Customer.create(req.body);
    res.send(newCustomer);
  }
};
router.post("/v1/api/customers", addNewCustomer);
module.exports = router;
