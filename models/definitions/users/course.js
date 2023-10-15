const { DataTypes } = require("sequelize");
const sequelize = require("../../../common/dbConnection");

const Course = sequelize.define(
  "course",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    code: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "course",
  }
);

module.exports = Course;
