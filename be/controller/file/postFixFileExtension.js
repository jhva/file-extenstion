const { ERROR } = require("../../error");
const { RES } = require("../../response");
const FixFileExtension = require("../../models/FixFileExtension");
module.exports = async (req, res) => {
  let fixFile = req.body;
  console.log(fixFile);
  try {
    const original = await FixFileExtension.findOne({
      where: { id: 1 },
    });
    if (original) {
      await FixFileExtension.update(
        { fixFileExtensionName: fixFile },
        { where: { id: 1 } },
      );
    } else {
      await FixFileExtension.create({
        fixFileExtensionName: JSON.stringify(fixFile),
      });
    }

    RES(201, "success", res);
  } catch (e) {
    ERROR(500, res, "sever error");
  }
};
