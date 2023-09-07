const router = require("express").Router();
const controllers = require("../controller");

router.post("", controllers.postFileExtension);

module.exports = router;
