let Books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, title: "1984", author: "George Orwell" },
  {
    id: 3,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
  },
  { id: 4, title: " Pride and Prejudice", author: "Jane Austen" },
  { id: 5, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 6, title: "Peer-e-Kamil", author: "Umera Ahmed" },
];

module.exports = {
  getBooks: () => {
    return Books;
  },
  updateBook: (id, data) => {
    const book = Books.find((b) => b.id === parseInt(id));
    if (!book) {
      return "The book with the given ID was not found.";
    } else {
      book.title = data.title;
      return book;
    }
  },
  deleteBook: (id) => {
    const book = Books.find((b) => b.id === parseInt(id));
    if (!book) {
      return "The book with the given ID was not found.";
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
      author: data.author,
    };
    Books.push(book);
    return book;
  },
};
