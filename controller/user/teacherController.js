const userController = require("./userController");
const teacherService = require("../../service/teacherService");

module.exports = {
  // Get all teachers
  getTeachers: async (req, res) => {
    const data = await teacherService.getTeachers(); // Fetch teachers using teacherService
    res.send(data);
  },

  createTeacher: async (req, res) => {
    // Extracting relevant data from the request body
    const { firstName, lasttName, email, phoneNumber } = req.body;
    const { department, address, yearsOfExperience } = req.body;

    // Create the user
    const user = await userController.createUserHelper({
      firstName: firstName,
      lasttName: lasttName,
      email: email,
      phoneNumber: phoneNumber,
    });

    // Create the teacher
    const teacher = await teacherService.createTeacher({
      department: department,
      address: address,
      yearsOfExperience: yearsOfExperience,
      userID: user.id, // Associate the teacher with the user
    });

    // Send the created teacher data as the response
    res.status(201).json(teacher);
  },

  // Update an existing teacher
  updateTeacher: async (req, res) => {
    const result = await teacherService.updateTeacher(req.params.id, req.body); // Update teacher using teacherService
    res.send(result);
  },

  // Delete an existing teacher
  deleteTeacher: async (req, res) => {
    const deleted = await teacherService.deleteTeacher(req.params.id); // Delete teacher using teacherService
    res.send(deleted);
  },
};
