let sequelize = require("../../common/dbConnection.js");
let user = require("./users/user");
let student = require("./users/student");
let courses = require("./users/course");
let teacher = require("./users/teacher");

user.hasOne(student, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
user.hasOne(teacher, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
student.belongsToMany(courses, {
  onDELETE: "CASCADE",
  through: "studentCourse",
  foreignKey: { name: "studentID", allownull: false },
});
courses.belongsToMany(student, {
  onDELETE: "CASCADE",
  through: "studentCourse",
  foreignKey: { name: "courseID", allownull: false },
});
teacher.belongsToMany(courses, {
  through: "teacherCourse",
  onUpdate: "CASCADE",
  foreignKey: { name: "teacherID", allownull: false },
});
courses.belongsToMany(teacher, {
  onDELETE: "CASCADE",
  through: "teacherCourse",
  foreignKey: { name: "courseID", allownull: false },
});
const models = sequelize.models;
console.log(models);
const db = {};
db.sequelize = sequelize;
module.exports = { db, models };
