const DataTypes = require("sequelize");
let sequelize = require("../../common/dbConnection");
const studentCourse = sequelize.define(
  "studentCourse",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "studentCourse",
  }
);
module.exports = studentCourse;
