const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require("./routes/users");
const gifsRouter = require("./routes/gifs");

app.use("/users", usersRouter);
app.use("/gifs", gifsRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
