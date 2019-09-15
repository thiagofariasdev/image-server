const Mongoose = require("./../Helpers/db");

const appSchema = Mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
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
