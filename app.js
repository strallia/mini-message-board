const express = require("express");
const path = require("node:path");

const app = express();

app.use("views", path.join(__dirname, "views"));
app.use("view engine", "ejs");
