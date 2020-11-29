const express = require("express");
const router = express.Router();
const Link = require("../models/link");

router.get("/:slug", async (req, res) => {
    try {
        const linkEntry = await Link.findOne({ slug: req.params.slug });
        if (linkEntry) {
            res.redirect(linkEntry.clientURL);
        } else {
            res.status(404).json("No shortlinks exist for this request");
        }
    } catch (error) {
        res.error(error.message);
    }
});

module.exports = router;
