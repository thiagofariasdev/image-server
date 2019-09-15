const FileSystem = require("./../Helpers/fs");
const { Application } = require("./../Database/application.schema");

class ApplicationController {
  async createApp(req, res) {
    try {
      /**@type {{appName:String}} */
      let { appName } = req.query;

      let application = await Application.create({
        id: appName.toLowerCase().replace(/\-\.\*/g, ""),
        name: appName
      });

      let path = await FileSystem.createDir(`public/apps/${appName}`);

      return res.json({ application, path });
    } catch (e) {
      console.log({ Error: e });
      if (e.errmsg && /duplicate key error/gi.test(e.errmsg)) {
        return res.json({
          error: true,
          message: "Application already exists."
        });
      }
      return res.json({ error: true, message: e });
    }
  }
}

module.exports = new ApplicationController();
