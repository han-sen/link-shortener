// <- --------------------------------------------- ->
// DEPENDENCIES
// <- --------------------------------------------- ->

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db");

// <- --------------------------------------------- ->
// MIDDLEWARE
// <- --------------------------------------------- ->

connectDB();
app.use(express.json({ extended: false }));

// <- --------------------------------------------- ->
// LISTENER
// <- --------------------------------------------- ->

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
