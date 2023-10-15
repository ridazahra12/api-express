const userController = require("./userController");
const courseController = require("./courseController");
const teacherService = require("../../service/teacherService");
module.exports = {
  getTeachers: async (req, res) => {
    const data = await userService.getTeachers();
    res.send(data);
  },
  createTeacher: async (req, res) => {
    const { firstName, lasttName, email, phoneNumber } = req.body;
    const { department, address, yearsOfExperience } = req.body;
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
    const data = await teacherService.createTeacher({
      department,
      address,
      yearsOfExperience,
      id: user.id,
      id: course.id,
    });
    res.send(data);
  },
};
