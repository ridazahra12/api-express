const userService = require("../../service/userService");
module.exports = {
  getUsers: async (req, res) => {
    const data = await userService.getUsers();
    res.send(data);
  },
  createUser: async (req, res) => {
    console.log(req.body);
    const data = await userService.createUser(req.body);
    res.send(data);
  },
  createUserHelper: async (data) => {
    const userdata = await userService.createUser(data);
    return userdata;
  },
  updateUser: async (req, res) => {
    const data = await userService.updateUser(req.params.id, req.body);
    res.send(data);
  },
  deleteUser: async (req, res) => {
    const data = await userService.deleteUser(req.params.id);
    res.send(data);
  },
};
