const express = require("express");
const router = new express.Router();

const {
  saveData,
  loadData,
  exactSearch,
} = require("../controllers/routeHandlers");

router
.post("/save", saveData)
.get("/load", loadData)
.get("/search", exactSearch)

module.exports = router;
