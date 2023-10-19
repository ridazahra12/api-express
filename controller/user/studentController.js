const userController = require("./userController");
const studentService = require("../../service/studentService");

module.exports = {
  getStudents: async (req, res) => {
    const data = await studentService.getStudents();
    res.send(data);
  },
  // Extracting relevant data from the request body
  createStudent: async (req, res) => {
    const { firstName, lasttName, email, phoneNumber } = req.body;
    const { semester, department, rollNumber } = req.body;

    const user = await userController.createUserHelper({
      firstName: firstName,
      lasttName: lasttName,
      email: email,
      phoneNumber: phoneNumber,
    });

    const student = await studentService.createStudent({
      semester: semester,
      department: department,
      rollNumber: rollNumber,
      userID: user.id, // Associate the student with the user
    });

    res.send(student);
  },
  updateStudent: async (req, res) => {
    const result = await studentService.updateStudent(req.params.id, req.body);
    res.send(result);
  },
  deleteStudent: async (req, res) => {
    const deleted = await studentService.deleteStudent(req.params.id);
    res.send(deleted);
  },
};
