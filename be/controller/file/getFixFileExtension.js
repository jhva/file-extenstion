const { ERROR } = require("../../error");
const { RES } = require("../../response");
const FixFileExtension = require("../../models/FixFileExtension");
module.exports = async (req, res) => {
  try {
    const data = await FixFileExtension.findAll({ raw: true });
    const fixFileField = data[0]["fixFileExtensionName"];
    RES(200, "success", res, JSON.parse(fixFileField));
  } catch (e) {
    ERROR(500, res, "sever error");
  }
};
