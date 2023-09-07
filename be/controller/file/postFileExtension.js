const FileExtension = require("../../models/FileExtension");
const { ERROR } = require("../../error");
const { RES } = require("../../response");

module.exports = async (req, res) => {
  const { customExtensionName } = req.body;
  try {
    const file = await FileExtension.findOne({
      where: {
        customExtensionName: customExtensionName,
      },
    });
    if (file) {
      RES(400, "이미 존재하는 확장자 입니다.", res);
      return;
    }
    await FileExtension.create({
      customExtensionName,
    });

    RES(201, "success", res);
  } catch (e) {
    ERROR(500, res, "sever error");
  }
};
