const teacherCourseService = require("../../service/teacherCourseService");

module.exports = {
  createTeacherCourse: async (req, res) => {
    const result = await teacherCourseService.createTeacherCourse(req.body);
    res.json(result);
  },
  getTeachersOfCourse: async (req, res) => {
    const { courseID } = req.params;
    const result = await teacherCourseService.getTeachersOfCourse(courseID);
    res.json(result);
  },
};
