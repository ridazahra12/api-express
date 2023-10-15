var express = require("express");
var router = express.Router();
const { teachercontroller } = require("../controller/index");
router.get("/", teachercontroller.getTeachers);
router.post("/createTeacher", teachercontroller.createTeacher);

module.exports = router;
