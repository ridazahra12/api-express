const { models } = require("../models/definitions");

module.exports = {
  createStudentCourse: async (data) => {
    const result = await models.StudentCourse.create({
      studentID: data.studentID,
      courseID: data.courseID,
    });
    return result;
  },

  getStudentsOfCourse: async (data) => {
    const result = await models.student.findAll({
      include: [
        {
          model: models.user,
          as: "user",
          where: { id: data },
        },
      ],
    });
    return result;
  },
};
