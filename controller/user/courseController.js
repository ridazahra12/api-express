const userController = require("./userController");
const courseService = require("../../service/courseService");
module.exports = {
  getCourses: async (req, res) => {
    const data = await courseService.getCourses();
    res.send(data);
  },
  createCourse: async (req, res) => {
    const { firstName, lasttName, email, phoneNumber } = req.body;
    const { code } = req.body;

    const user = await userController.createUser({
      firstName,
      lasttName,
      email,
      phoneNumber,
    });

    const data = await courseService.createCourse({
      code,
      id: user.id,
    });

    res.send(data);
  },
};
