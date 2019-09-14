const { Router } = require("express");
const route = Router();
const ImageController = require("./../Controllers/ImageController");

route.post("/image/save/:app", ImageController.saveImage);

route.get("/image-count/:mime", ImageController.countImages);

route.get("/images/list-mime/:mime", ImageController.getImages);

route.get("/image/find", ImageController.findImage);

module.exports = route;
