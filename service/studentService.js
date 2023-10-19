const { models } = require("../models/definitions");
module.exports = {
  getStudents: async (data) => {
    const result = await models.student.findAll();
    return result;
  },

  createStudent: async (studentData) => {
    const result = await models.student.create(studentData);
    return result;
  },

  updateStudent: async (id, updatedData) => {
    const result = await models.student.update(updatedData, { where: { id } });
    return result;
  },

  deleteStudent: async (id) => {
    const result = await models.student.destroy({ where: { id } });
    return result;
  },
};
