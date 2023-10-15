const { DataTypes } = require("sequelize");
const sequelize = require("../../../common/dbConnection");

const Teacher = sequelize.define(
  "teacher",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    department: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    yearsOfExperience: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "teacher",
  }
);

module.exports = Teacher;
