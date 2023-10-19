var express = require("express");
const {
  createStudentCourse,
  getStudentsOfCourse,
} = require("../controller/user/studentCourseController");

var router = express.Router();

/* GET users listing. */
router.post("/studentCourse", createStudentCourse);
router.get("/course/:courseID/students", getStudentsOfCourse);

module.exports = router;
