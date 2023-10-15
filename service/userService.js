const { models } = require("../models/definitions");
module.exports = {
  getUsers: async (data) => {
    const result = await models.user.findAll();
    return result;
  },
  createUsers: async (data) => {
    console.log(data);
    const result = await models.user.create(data);
    return result;
  },
};
