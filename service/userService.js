const { models } = require("../models/definitions");
module.exports = {
  getUsers: async (data) => {
    const result = await models.user.findAll();
    return result;
  },
  getUserById: async (id) => {
    const result = await models.user.findByPk(id);
    return result;
  },

  createUser: async (userData) => {
    const result = await models.user.create(userData);
    return result;
  },

  updateUser: async (id, updatedData) => {
    const result = await models.user.update(updatedData, { where: { id } });
    return result;
  },

  deleteUser: async (id) => {
    const result = await models.user.destroy({ where: { id } });
    return result;
  },
};
