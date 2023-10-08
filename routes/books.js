var express = require("express");
const {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} = require("../controller/books/bookController");
var router = express.Router();
/* GET users listing. */
router.get("/", getBooks);
router.post("/addBook", addBook);
router.put("/updateBook/:id", updateBook);
router.delete("/deleteBook/:id", deleteBook);
module.exports = router;
