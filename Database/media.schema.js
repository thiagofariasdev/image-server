const Mongoose = require("./../Helpers/db");
const { Application } = require("./application.schema");

const mediaSchema = Mongoose.Schema({
  _id: {
    type: Mongoose.Types.ObjectId
  },
  mime: String,
  urls: {
    small: { type: String, required: false },
    normal: { type: String, required: false },
    preload: { type: String, required: false },
    full: { type: String, required: false }
  },
  application: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "Application"
  },
  realPath: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Media = Mongoose.model("Media", mediaSchema);

mediaSchema.static.createOne = async function(MediaInstance) {
  MediaInstance._id = new Mongoose.Types.ObjectId(11);
  if (!MediaInstance.mime) MediaInstance.mime = "jpeg";
  let app = await Application.findOne({ name: MediaInstance.appName });
  MediaInstance.application = app._id;
  return await Media.create(MediaInstance);
};

module.exports = {
  Media,
  mediaSchema
};
