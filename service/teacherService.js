const { models } = require("../models/definitions");
module.exports = {
  getTeachers: async (data) => {
    const result = await models.teacher.findAll();
    return result;
  },
  createTeacher: async (teacherData) => {
    const result = await models.teacher.create(teacherData);
    return result;
  },

  updateTeacher: async (id, updatedData) => {
    const result = await models.teacher.update(updatedData, { where: { id } });
    return result;
  },

  deleteTeacher: async (id) => {
    const result = await models.teacher.destroy({ where: { id } });
    return result;
  },
};
