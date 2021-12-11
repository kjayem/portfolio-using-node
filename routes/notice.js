const express = require('express');
const router = express.Router();

router.route("/").get((req, res) => {
    var title = "DOYOUSOUL? | Notice"
    res.render('notice/notice', {
        title: title
    });
})

module.exports = router;