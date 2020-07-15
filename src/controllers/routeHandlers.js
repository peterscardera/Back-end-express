const data = require("../data/data.js");

const saveData = (req, res) => {
  let receivedData = req.body;
  receivedData.forEach((eachBook) => {
    data.push(eachBook);
  });
  res.status(200).json({ data });
};

const loadData = (req, res) => {
  res.status(200).json({ data });
};

const exactSearch = (req, res) => {
  const { exact_text, text, order_by, sort_direction } = req.query;

  //Exact_text query string
  if (exact_text) {
    const book = data.filter(
      (specificBook) => specificBook.author === exact_text
    );
    if (!book) {
      return res.status(404).json({ message: "No book found" });
    }
    res.status(200).json(book);
  }
  //order_by and text
  if (order_by === "name" && text) {
    let filtered = data.filter((eachBook) => {
      if (eachBook.author === text) {
        return eachBook;
      }
    });
    filtered.sort((a, b) => (a.name > b.name ? 1 : -1));
    return res.status(200).json(filtered);
  }

  if (order_by === "published" && sort_direction && text) {
    if (sort_direction === "desc") {
      data.sort((a, b) => (a.published < b.published ? 1 : -1));
    } else if (sort_direction === "asc") {
      data.sort((a, b) => (a.published > b.published ? 1 : -1));
    }

    return res.status(200).json(data);
  }

  // only text
  if (text) {
    data.forEach((book) => {
      if (book.author.includes(text) || book.name.includes(text)) {
        return res.status(200).json({ author: book.author, name: book.name });
      }
    });
  }
};

module.exports = { saveData, loadData, exactSearch };
