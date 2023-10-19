var express = require("express");
var router = express.Router();
const { studentController } = require("../controller/index");
router.get("/", studentController.getStudents);
router.post("/", studentController.createStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);
module.exports = router;
