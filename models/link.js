const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
    urlCode: String,
    clientUrl: String,
    shortUrl: String,
    date: { type: String, default: Date.now() },
});

module.exports = mongoose.model("Link", linkSchema);
