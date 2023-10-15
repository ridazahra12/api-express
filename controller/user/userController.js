const userService = require("../../service/userService");
module.exports = {
  getUsers: async (req, res) => {
    const data = await userService.getUsers();
    res.send(data);
  },
  createUser: async (req, res) => {
    console.log(req.body);
    const data = await userService.createUsers(req.body);
    res.send(data);
  },
  createUserHelper: async (data) => {
    const userdata = await userService.createUsers(data);
    return userdata;
  },
};
