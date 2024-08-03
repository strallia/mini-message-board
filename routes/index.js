const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  console.log("Recieved GET request at /");
  res.render("index", { title: "Mini Message Board", messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

module.exports = router;
