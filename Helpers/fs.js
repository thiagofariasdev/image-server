const fs = require("fs"),
  path = require("path"),
  root = _path => path.resolve(__dirname, "./../", _path);

function exists(_path) {
  return new Promise(resolve => {
    fs.exists(root(_path), exists => {
      resolve(exists);
    });
  });
}

function create(_path) {
  return new Promise(resolve => {
    fs.mkdir(root(_path), err => {
      if (err) resolve(false, err);
      fs.writeFile(root(_path + "/.keep"), "keep this directory", error => {
        if (error) resolve(false, error);
        resolve(true);
      });
    });
  });
}

class FileSystem {
  async createDir(_path) {
    let exist = await exists(_path);
    if (!exist) exist = await create(_path);
    return root(_path);
  }
}

module.exports = new FileSystem();
