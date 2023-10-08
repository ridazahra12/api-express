var express = require("express");
const {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} = require("../controller/books/booksController");
var router = express.Router();
router.get("/", getBooks);
router.post("/addBook", addBook);
router.put("/updateBook/:id", updateBook);
router.delete("/deleteBook/:id", deleteBook);
module.exports = router;
