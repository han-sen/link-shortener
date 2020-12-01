// <- --------------------------------------------- ->
// DEPENDENCIES
// <- --------------------------------------------- ->

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// <- --------------------------------------------- ->
// DEPENDENCIES
// <- --------------------------------------------- ->

const db = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
        });
        console.log("MongoDB connected...");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

connectDB();

// <- --------------------------------------------- ->
// MIDDLEWARE
// <- --------------------------------------------- ->

app.use(cors());
app.use(express.json({ extended: false }));

app.use("/", require("./controllers/index"));
app.use("/api/url", require("./controllers/url"));

// <- --------------------------------------------- ->
// LISTENER
// <- --------------------------------------------- ->

app.listen(PORT, () => console.log(`⚡️ Listening on Port: ${PORT} ⚡️`));
