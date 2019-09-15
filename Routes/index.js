const { Router } = require("express");
const route = Router();
const ImageController = require("./../Controllers/ImageController");
const ApplicationController = require("./../Controllers/ApplicationController");

route.get("/image/save/:app", ImageController.saveImage);

route.get("/image/count/:app", ImageController.countImages);

route.get("/image/list/:app", ImageController.getImages);

route.get("/image/find", ImageController.findImage);

route.get("/application/create", ApplicationController.createApp);

module.exports = route;
