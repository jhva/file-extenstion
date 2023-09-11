const FileExtension = require("../../models/FileExtension");
const { ERROR } = require("../../error");
const { RES } = require("../../response");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    await FileExtension.destroy({
      where: {
        id,
      },
    });
    RES(200, "success", res);
  } catch (e) {
    ERROR(500, res, "sever error");
  }
};
