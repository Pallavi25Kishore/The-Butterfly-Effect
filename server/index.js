require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.static(path.join(__dirname, "../public")));

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
