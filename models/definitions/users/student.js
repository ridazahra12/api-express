const DataTypes = require("sequelize");
let sequelize = require("../../../common/dbConnection");
const student = sequelize.define(
  "student",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },

    rollNumber: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    department: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    semester: {
      unique: true,
      allowNull: true,
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: true, paranoid: true, sequelize, modelName: "student" }
);

module.exports = student;
