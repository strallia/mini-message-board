const db = require("../db/queries");

const getMessages = async (req, res) => {
  console.log("Received GET request at /");
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message Board", messages });
};

const getNewMessageForm = (req, res) => {
  res.render("form");
};

const postNewMessage = async (req, res) => {
  const { text, name } = req.body;
  await db.addNewMessage(text, name);
  res.redirect("/");
};

const getMessageById = async (req, res) => {
  const messageID = req.params.id;
  const message = await db.getMessageByID(messageID);
  res.render("message", { message });
};

module.exports = {
  getMessages,
  getNewMessageForm,
  postNewMessage,
  getMessageById,
};
