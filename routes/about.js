const express = require('express');
const router = express.Router();

router.route("/").get((req, res) => {

    var title = "UNDEFINED | About"
    res.render('about/about', {
        title: title
    });
})

module.exports = router;