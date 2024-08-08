const pool = require("./pool");

const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const addNewMessage = async (text, name) => {
  await pool.query("INSERT INTO messages (text, name) VALUES ($1, $2)", [
    text,
    name,
  ]);
};

const getMessageByID = async (messageID) => {
  const res = await pool.query(
    "SELECT text, name, added FROM messages WHERE id = $1",
    [messageID]
  );
  return res.rows[0];
};

module.exports = {
  getAllMessages,
  addNewMessage,
  getMessageByID,
};
