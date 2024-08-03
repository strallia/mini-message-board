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

const getMessages = (req, res) => {
  console.log("Received GET request at /");
  res.render("index", { title: "Mini Message Board", messages });
};

const getNewMessageForm = (req, res) => {
  res.render("form");
};

const postNewMessage = (req, res) => {
  const { text, user } = req.body;
  messages.push({ text, user, added: new Date(), id: crypto.randomUUID() });
  res.redirect("/");
};

const getMessageById = (req, res) => {
  const messageID = req.params.id;
  const message = messages.find((message) => message.id === messageID);
  res.render("message", { message });
};

module.exports = {
  getMessages,
  getNewMessageForm,
  postNewMessage,
  getMessageById,
};
