const express = require('express');
const router = express.Router();

router.route("/").get((req, res) => {
    var title = "DOYOUSOUL? | Artists"
    res.render('artists/artists', {
        title: title
    });
})

module.exports = router;