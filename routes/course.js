var express = require("express");
var router = express.Router();
const { courseController } = require("../controller/index");
router.get("/", courseController.getCourses);
router.post("/", courseController.createCourse);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);
module.exports = router;
