let Books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
];
module.exports = {
  getBooks: (data) => {
    return Books;
  },
  updateBook: (id, data) => {
    const course = Courses.find((c) => c.id === parseInt(id));
    if (!book) {
      return "The book with the given ID was not found."; //404
    } else {
      course.title = data.title;
      return book;
    }
  },
  deleteBook: (id) => {
    const book = book.find((c) => c.id === parseInt(id));
    if (!book) {
      return "The book with the given ID was not found."; //404
    } else {
      const index = Books.indexOf(book);
      Books.splice(index, 1);
      return book;
    }
  },
  addBook: (data) => {
    const book = {
      id: Books.length + 1,
      title: data.title,
    };
    Books.push(book);
    return book;
  },
};
