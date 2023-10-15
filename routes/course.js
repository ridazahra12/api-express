var express = require("express");
var router = express.Router();
const { courseController } = require("../controller/index");
router.get("/", courseController.createCourse);
router.post("/createCourse", courseController.createCourse);

module.exports = router;
