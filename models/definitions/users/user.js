const DataTypes = require("sequelize");
let sequelize = require("../../../common/dbConnection");
const user = sequelize.define(
  "user",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },

    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lasttName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      unique: true,
      allowNull: true,
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    phoneNumber: {
      unique: true,
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
  { timestamps: true, paranoid: true, sequelize, modelName: "user" }
);
module.exports = user;
