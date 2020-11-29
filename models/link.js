const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
    stubCode: String,
    clientURL: String,
    shortURL: String,
    date: { type: String, default: Date.now() },
});

module.exports = mongoose.model("Link", linkSchema);
