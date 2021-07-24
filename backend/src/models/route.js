const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const routesSchema = new Schema(
  {
    departureLocation: {
      name: {
        type: String,
        required: true,
      },
      subLocations: { type: [String] },
    },
    arrivalLocation: {
      name: {
        type: String,
        required: true,
      },
      subLocations: { type: [String] },
    },
    duration: {
      type: Number,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Routes", routesSchema);
