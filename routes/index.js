const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: crypto.randomUUID(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: crypto.randomUUID(),
  },
];

router.get("/", (req, res) => {
  console.log("Received GET request at /");
  res.render("index", { title: "Mini Message Board", messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  const { text, user } = req.body;
  messages.push({ text, user, added: new Date(), id: crypto.randomUUID() });
  res.redirect("/");
});

router.get("/message/:id", (req, res) => {
  const messageID = req.params.id;
  const message = messages.find((message) => message.id === messageID);
  res.render("message", { message });
});

module.exports = router;
