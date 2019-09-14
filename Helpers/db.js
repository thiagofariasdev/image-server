const Mongoose = require("mongoose");
const { error, print } = require("./log");
const { HOST, PORT, DB_NAME } = require("./../config/db");

const uri = `mongodb://${HOST}${PORT ? ":" + PORT : ""}/${DB_NAME}`;
Mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

Mongoose.Promise = global.Promise;

module.exports = Mongoose;
