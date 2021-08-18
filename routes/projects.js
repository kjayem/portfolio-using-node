const express = require('express');
let router = express.Router();

router.route("/album").get((req, res) => {
    ///projects/album
    res.send('hi get /projects/album');
});

router.route("/merch").get((req, res) => {
    ///projects/merch
    res.send('hi get /projects/merch');
});

router.route("/webdev").get((req, res) => {
    ///projects/webdev
    res.send('hi get /projects/webdev-and-design');
});



module.exports = router;