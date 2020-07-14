const data = require("../data/data.js");
const fs = require("fs");

const saveData = (req, res) => {
  const { data } = req.body;
  console.log(data);
  fs.writeFile("../data.json", JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
    res.send("ok");
  });
};

const loadData = (req, res) => {
  res.status(200).json({ data });
};

const exactSearch = (req, res) => {
  const { exact_text, text, order_by } = req.query;
  console.log(text);
  if (exact_text) {
    const book = data.find(
      (specificBook) => specificBook.author === exact_text
    );
    if (!book) {
      return res.status(404).json({ message: "No book found" });
    }
    res.status(200).json({ book });
  }
  if (text) {
    data.forEach((book) => {
      if (book.author.includes(text) || book.name.includes(text)) {
        res.status(200).json({ author: book.author, name: book.name });
      }
    });
  }
  if (order_by) {
  }
};

module.exports = { saveData, loadData, exactSearch };
