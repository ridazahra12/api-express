const courseService = require("../../service/courseService");
module.exports = {
  getCourses: async (req, res) => {
    const data = await courseService.getCourses();
    res.send(data);
  },
  createCourse: async (req, res) => {
    const students = await courseService.createCourse(req.body);
    res.send(students);
  },
  updateCourse: async (req, res) => {
    const result = await courseService.updateCourse(req.params.id, req.body);
    res.send(result);
  },

  deleteCourse: async (req, res) => {
    const deleted = await courseService.deleteCourse(req.params.id);
    res.send(deleted);
  },
};
