const Joi = require("joi");
const bookService = require("../../service/bookService");

const bookSchema = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  title: Joi.string().required(),
  author: Joi.string().required(),
});

module.exports = {
  getBooks: (req, res) => {
    const data = bookService.getBooks();
    res.send(data);
  },

  updateBook: (req, res) => {
    const data = bookService.updateBook(req.params.id, req.body);
    res.send(data);
  },

  deleteBook: (req, res) => {
    const data = bookService.deleteBook(req.params.id);
    res.send(data);
  },

  addBook: (req, res) => {
    try {
      const validate = bookSchema.validate(req.body);
      if (validate.error) {
        res.status(400).send(validate.error.details[0].message);
      } else {
        const data = bookService.addBook(req.body);
        res.send(data);
      }
    } catch (error) {
      res.status(500).send("Something went wrong");
    }
  },
};
