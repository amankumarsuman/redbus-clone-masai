const mongoose = require("mongoose");

const devServer = "mongodb://127.0.0.1:27017/redBusClone";
const proServer =
  "mongodb+srv://AleemAlam:password@1234@cluster0.a5f0y.mongodb.net/redBusClone?retryWrites=true&w=majority";
const connect = () => {
  return mongoose.connect(proServer, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};
module.exports = connect;
