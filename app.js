const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/index.js");

const app = express();

// Configure views settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Set routers
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
