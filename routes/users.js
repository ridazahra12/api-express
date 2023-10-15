var express = require("express");
var router = express.Router();
const { userController } = require("../controller/index");
/* GET users listing. */
router.get("/", userController.getUsers);
router.post("/createUsers", userController.createUser);

module.exports = router;
