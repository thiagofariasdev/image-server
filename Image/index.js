const Hash = require("./../Helpers/crypto");
const path = require("path");
const fs = require("fs");
const tmp = (paths, p) => path.resolve(__dirname, "./../tmp", p);

class Image {
  async optimizeImage(data) {
    const file_name = Hash.make(new Date().toISOString());
    const stream = fs.createWriteStream(tmp`${file_name}`);
    return new Promise(resolve => {
      stream.on("open", () => {
        stream.write(data, error => {
          if (error) throw error;
          stream.close();
        });
        stream.on("close", () => {
          resolve({ created: true, file: tmp`${file_name}` });
        });
      });
    });
  }
}

module.exports = new Image();
