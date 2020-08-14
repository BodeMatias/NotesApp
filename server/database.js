const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.DB_CONNECT;

mongoose
    .connect(URI)
    .then((db) => console.log("db connected"))
    .catch((err) => console.log(err));

module.exports = mongoose;
