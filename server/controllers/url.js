const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortId = require("shortid");
const dotenv = require("dotenv");
dotenv.config();
const Link = require("../models/link");

// post a new URL to /api/url
router.post("/", async (req, res) => {
    const { clientURL } = req.body;
    const baseURL = process.env.baseURL;

    // check out baseUrl
    if (!validUrl.isUri(baseURL)) {
        return res.status(401).json("invalid base url");
    }

    // create unique stub code
    const slug = shortId.generate();

    // check client/long URL
    if (validUrl.isUri(clientURL)) {
        try {
            let newURL = await Link.findOne({ clientURL });
            //if url entry already exists, return it
            if (newURL) {
                res.json(newURL.shortURL);
            } else {
                const shortURL = `${baseURL}/${slug}`;
                // create new Link instance
                newURL = new Link({
                    clientURL,
                    shortURL,
                    slug,
                    date: new Date(),
                });
                // save to db and return
                await newURL.save();
                res.json(newURL.shortURL);
            }
        } catch (error) {
            return res.status(500).json("invalid db entry");
        }
    } else {
        res.status(401).json("invalid client URL");
    }
});

module.exports = router;
