var express = require("express");
const {
  createTeacherCourse,
  getTeachersOfCourse,
} = require("../controller/user/teacherCourseController");

var router = express.Router();

/* GET users listing. */
router.post("/teacherCourse", createTeacherCourse);
router.get("/course/:courseID/teachers", getTeachersOfCourse);

module.exports = router;
