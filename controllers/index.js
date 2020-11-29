const express = require("express");
const router = express.Router();
const Link = require("../models/link");

router.get("/:stubCode", async (req, res) => {
    try {
        const linkEntry = await Link.findOne({ stubCode: req.params.stubCode });
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
