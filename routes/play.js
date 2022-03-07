const express = require('express');
const router = express.Router();

router.route("/").get((req, res) => {
    var title = "DOYOUSOUL? | Favorites"
    res.render('play/play', {
        title: title
    });
})

module.exports = router;