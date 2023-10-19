const studentCourseService = require("../../service");

module.exports = {
  createStudentCourse: async (req, res) => {
    const result = await studentCourseService.createStudentCourse(req.body);
    res.json(result);
  },
  getStudentsOfCourse: async (req, res) => {
    const { courseID } = req.params;
    const result = await studentCourseService.getStudentsOfCourse(courseID);
    res.json(result);
  },
};
