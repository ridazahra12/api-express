let sequelize = require("../../common/dbConnection");
let user = require("./users/user");
let student = require("./users/student");
let teacher = require("./users/teacher");
const Course = require("./users/course");
user.hasOne(student, {
  onDelete: "CASCADE",
  foreignKey: { name: "userId", allowNull: false, unique: true },
});
student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userId", allowNull: false, unique: true },
});
user.hasOne(teacher, {
  onDelete: "CASCADE",
  foreignKey: { name: "userId", allowNull: false, unique: true },
});
teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userId", allowNull: false, unique: true },
});
student.belongsToMany(Course, {
  through: "StudentCourse",
  foreignKey: "courseId",
});
Course.belongsTo(student, {
  through: "StudentCourse",
  foreignKey: "courseId",
});
teacher.belongsToMany(Course, {
  through: "CourseTeacher",
  foreignKey: "courseId",
});
Course.belongsToMany(teacher, {
  through: "CourseTeacher",
  foreignKey: "courseId",
});

const models = sequelize.models;
console.log(models);
const db = {};
db.sequelize = sequelize;
module.exports = { db, models };
