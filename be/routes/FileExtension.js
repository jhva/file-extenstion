const router = require("express").Router();
const controllers = require("../controller");

router.post("", controllers.postFileExtension);
router.get("", controllers.getFileExtension);
router.delete(":id", controllers.deleteFileExtension);

module.exports = router;
