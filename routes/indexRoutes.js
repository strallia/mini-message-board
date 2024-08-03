const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController.js");

router.get("/", indexController.getMessages);

router.get("/new", indexController.getNewMessageForm);
router.post("/new", indexController.postNewMessage);

router.get("/message/:id", indexController.getMessageById);

module.exports = router;
