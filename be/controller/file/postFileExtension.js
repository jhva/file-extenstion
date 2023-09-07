const FileExtension = require("../../models/FileExtension");
const { ERROR } = require("../../error");
const { RES } = require("../../response");

module.exports = async (req, res) => {
  const { customExtensionName } = req.body;
  try {
    await FileExtension.create({
      customExtensionName,
    });

    RES(201, "success", res);
  } catch (e) {
    ERROR(500, res, "sever error");
  }
};
