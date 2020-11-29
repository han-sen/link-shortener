const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortId = require("shortid");
const config = require("config");
const Link = require("../models/link");

// post a new URL to /url/shorten
router.post("/shorten", async (req, res) => {
    const { clientUrl } = req.body;
    const baseUrl = config.get("baseUrl");

    // check out baseUrl
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json("invalid base url");
    }

    // create unique stub code
    const urlCode = shortId.generate();

    // check client/long URL
    if (validUrl.isUri(clientUrl)) {
        try {
            let url = await Link.findOne({ clientUrl });
            //if url exists
            if (url) {
                res.json(url);
            } else {
                const shortUrl = `${baseUrl}/${urlCode}`;
                // create new Link instance
                url = new Link({
                    clientUrl,
                    shortUrl,
                    urlCode,
                    date: new Date(),
                });
                // save to db
                await url.save();

                res.json(url);
            }
        } catch (error) {
            return res.status(500).json("invalid db entry");
        }
    } else {
        res.status(401).json("invalid client URL");
    }
});

module.exports = router;
