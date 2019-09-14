const { Media } = require("./../Database/media.schema");

class ImageController {
  async saveImage(req, res) {
    return media;
  }
  async countImages(req, res) {
    let { mime } = req.params;
    Media.count({ mime }, (error, count) => {
      if (error) console.log(error);
      return res.json({ count });
    });
  }
  async resizeImage() {}
  async getImages(req, res) {
    let { mime } = req.params;
    Media.find({ mime }, (err, data) => {
      return res.json({ data });
    });
  }
  async findImage(req, res) {}
}

module.exports = imageController = new ImageController();
