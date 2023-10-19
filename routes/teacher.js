var express = require("express");
var router = express.Router();
const { teachercontroller } = require("../controller/index");
router.get("/", teachercontroller.getTeachers);
router.post("/", teachercontroller.createTeacher);
router.put("/:id", teachercontroller.updateTeacher);
router.delete(":id", teachercontroller.deleteTeacher);
module.exports = router;
