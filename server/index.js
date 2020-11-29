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

app.use("/", require("./controllers/index"));
app.use("/api/url", require("./controllers/url"));

// <- --------------------------------------------- ->
// LISTENER
// <- --------------------------------------------- ->

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
