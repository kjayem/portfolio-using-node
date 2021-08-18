const express = require('express');
let router = express.Router();
const contactTemplate = require('../public/js/contact-template');

router.route("/:id").get((req, res) => {
    ///photos/:id
    var photoLocation = req.params.id;
    //photoLocation = :id
    var htmlHead = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../css/main.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <title>${photoLocation}</title>
        </head>
        `;
    var contact = contactTemplate.contactTemplate('flwfeeld@gmail.com', '+82 01029347310', 'instagram: j00my', 'Mullae-dong, Yeongdeungpo-gu, Seoul, S. Korea');
    //checks location of photo user wants to see
    if (photoLocation === 'chicago') {
        ///photos/chicago
        var htmlBody = `
        <body>
        <div class="photo-top-container">
            <p><a href="/">home</a></p>
            <p>${photoLocation}</p>
        </div>
        <div class="gallery-container">
            <ul>
                <li><img src="/img/chicago-crown-fountain.jpg"></li>
                <li><img src="/img/chicago-crossing.jpg"></li>
                <li><img src="/img/chicago-caution.jpg"></li>
                <li><img src="/img/chicago-bean.jpg"></li>
            </ul>
        </div>
        </body>
        `;
        res.send(htmlHead + htmlBody + contact);
    } else if (photoLocation === 'UIUC') {
        ///photos/uiuc
        var htmlBody = `
        <body>
        <div class="photo-top-container">
            <p><a href="/">home</a></p>
            <p>${photoLocation}</p>
        </div>
        <div class="gallery-container">
            <ul>
                <li><img src="/img/uiuc-road.jpg"></li>
                <li><img src="/img/uiuc-art.jpg"></li>
                <li><img src="/img/uiuc-urbanite.jpg"></li>
                <li><img src="/img/uiuc-dough.jpg"></li>
                <li><img src="/img/uiuc-grainger.jpg"></li>
                <li><img src="/img/uiuc-study.jpg"></li>
                <li><img src="/img/uiuc-campus.jpg"></li>
            </ul>
        </div>
        </body>
        `;
        res.send(htmlHead + htmlBody + contact);
    } else if (photoLocation === 'seattle') {
        
    } else {
        // if location is not defined
        app.use(function(req, res, next) {
            res.status(404).send('Sorry cant find that!')
        });
    }
});

module.exports = router;