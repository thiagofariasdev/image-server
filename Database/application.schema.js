const Mongoose = require("./../Helpers/db");

const appSchema = Mongoose.Schema({
  _id: Mongoose.Types.ObjectId,
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Application = Mongoose.model("Application", appSchema);

module.exports = {
  Application,
  appSchema
};
