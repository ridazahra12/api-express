const userController = require("./userController");
const courseController = require("./courseController");
const studentService = require("../../service/studentService");
module.exports = {
  getStudents: async (req, res) => {
    const data = await userService.getStudents();
    res.send(data);
  },
  createStudent: async (req, res) => {
    const { firstName, lasttName, email, phoneNumber } = req.body;
    const { semester, department, rollNumber } = req.body;
    const { code } = req.body;

    const user = await userController.createUser({
      firstName,
      lasttName,
      email,
      phoneNumber,
    });
    const course = await courseController.createCourse({
      code,
    });

    const data = await studentService.createStudent({
      semester,
      department,
      rollNumber,
      id: user.id,
      id: course.id,
    });

    res.send(data);
  },
};
