const express = require('express');
const router = express.Router();
const homeTemplate = require('../public/js/home-template.js');
const contactTemplate = require('../public/js/contact-template');

//homepage
router.get('/', (req, res) => {
    var currentTitle = 'NAMEHERE';
    var contact = contactTemplate.contactTemplate('flwfeeld@gmail.com', '+82 01029347310', '@j00my', 'Mullae-dong, Yeongdeungpo-gu, Seoul, S. Korea');
    var html = homeTemplate.htmlHome(currentTitle, contact);
    res.send(html);
});

module.exports = router;