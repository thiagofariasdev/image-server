const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
const apiRoutes = require("./Routes/index");
const { error, print } = require("./Helpers/log");
const FileSystem = require("./Helpers/fs");

const PORT = 8080,
  HOST = "localhost";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use("/api", apiRoutes);

http.createServer(app).listen(PORT, HOST, e => {
  if (e) error(e);
  print(`Server listening on port: ${PORT}`);
  FileSystem.createDir("tmp");
});
