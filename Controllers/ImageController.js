const { Media } = require("./../Database/media.schema");
const Image = require("./../Image/index");
const { Application } = require("./../Database/application.schema");

class ImageController {
  async saveImage(req, res) {
    const appExists = await Application.exists({ name: req.params.app });
    if (!appExists)
      return res.json({
        error: true,
        message: "Application does not exits"
      });

    const date = new Date().toISOString();

    const str = req.query.name + date;

    const tempImage = await Image.optimizeImage("data.....data");

    return res.json({ fileName, tempImage });
  }
  async countImages(req, res) {
    let { app } = req.params;
    Media.count({ application: app }, (error, count) => {
      if (error) console.log(error);
      return res.json({ count });
    });
  }
  async resizeImage() {}
  async getImages(req, res) {
    let { app } = req.params;
    Media.find({ application: app }, (err, data) => {
      return res.json({ data });
    });
  }
  async findImage(req, res) {}
}

module.exports = imageController = new ImageController();
