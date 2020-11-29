const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortId = require("shortid");
const config = require("config");
const Link = require("../models/link");

// post a new URL to /api/url
router.post("/", async (req, res) => {
    const { clientURL } = req.body;
    const baseURL = config.get("baseURL");

    // check out baseUrl
    if (!validUrl.isUri(baseURL)) {
        return res.status(401).json("invalid base url");
    }

    // create unique stub code
    const stubCode = shortId.generate();

    // check client/long URL
    if (validUrl.isUri(clientURL)) {
        try {
            let newURL = await Link.findOne({ clientURL });
            //if url entry already exists, return it
            if (newURL) {
                res.json(newURL);
            } else {
                const shortURL = `${baseURL}/${stubCode}`;
                // create new Link instance
                newURL = new Link({
                    clientURL,
                    shortURL,
                    stubCode,
                    date: new Date(),
                });
                // save to db and return
                await newURL.save();
                res.json(newURL);
            }
        } catch (error) {
            return res.status(500).json("invalid db entry");
        }
    } else {
        res.status(401).json("invalid client URL");
    }
});

module.exports = router;
