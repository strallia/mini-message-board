const express = require("express");
const indexRouter = express.Router();

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

indexRouter.get("/", (req, res) => {
  console.log("Recieved GET request at /");
  res.render("index", { title: "Mini Message Board", messages });
});

module.exports = indexRouter;
