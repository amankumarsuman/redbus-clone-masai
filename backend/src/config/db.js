const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://AleemAlam:password@1234@cluster0.a5f0y.mongodb.net/redBusClone?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
};
module.exports = connect;
