const FileExtension = require("../../models/FileExtension");
const { ERROR } = require("../../error");
const { RES } = require("../../response");

module.exports = async (req, res) => {
  try {
    const data = await FileExtension.findAll({
      limit: 200,
      order: [["createdAt", "DESC"]],
    });

    RES(200, "success", res, data);
  } catch (e) {
    ERROR(500, res, "sever error");
  }
};
