const express = require('express');
const router = express.Router();

router.route("/").get((req, res) => {
    var title = "DOYOUSOUL? | Projects"
    res.render('projects/projects', {
        title: title
    });
})

module.exports = router;