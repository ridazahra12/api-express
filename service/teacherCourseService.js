const { models } = require("../models/definitions");

module.exports = {
  createCourseTeacher: async (data) => {
    const result = await models.TeacherCourse.create({
      teacherID: data.teacherID,
      courseID: data.courseID,
    });
    return result;
  },

  getTeachersOfCourse: async (data) => {
    const result = await models.teacher.findAll({
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
