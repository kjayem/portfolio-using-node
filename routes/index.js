const express = require('express');
const router = express.Router();

// get home page
router.get('/', (req, res) => {
    res.render('', {
        //layout.hbs
        title: 'DOYOUSOUL?'
    });

    
    // var currentTitle = 'NAMEHERE';
    // var contact = contactTemplate.contactTemplate('flwfeeld@gmail.com', '+82 01029347310', '@j00my', 'Mullae-dong, Yeongdeungpo-gu, Seoul, S. Korea');
    // var html = homeTemplate.htmlHome(currentTitle, contact);
    // res.send(html);
});

module.exports = router;