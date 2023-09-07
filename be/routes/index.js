const router = require("express").Router();
const FileExtension = require("./FileExtension");

router.use("/fileExtension", FileExtension);

module.exports = router;
