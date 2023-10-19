//importing dbConnection
//here we define schemas
const DataTypes = require("sequelize");
let sequelize = require("../../common/dbConnection");
const teacherCourse = sequelize.define(
  "teacherCourse",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    //these are global properties
    sequelize, //instance
    modelName: "teacherCourse",
  }
);
module.exports = teacherCourse;
