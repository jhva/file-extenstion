const router = require("express").Router();
const controllers = require("../controller");

router.post("", controllers.postFileExtension);
router.get("", controllers.getFileExtension);

module.exports = router;
