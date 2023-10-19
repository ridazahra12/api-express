const { models } = require("../models/definitions");
module.exports = {
  getCourses: async (data) => {
    const result = await models.course.findAll();
    return result;
  },

  createCourse: async (courseData) => {
    const result = await models.course.create(courseData);
    return result;
  },

  updateCourse: async (id, updatedData) => {
    const result = await models.course.update(updatedData, { where: { id } });
    return result;
  },

  deleteCourse: async (id) => {
    const result = await models.course.destroy({ where: { id } });
    return result;
  },
};
