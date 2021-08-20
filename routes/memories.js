const express = require('express');
let router = express.Router();
const htmlHeadTemplate = require('../public/js/html-head-template');
const memoriesTemplate = require('../public/js/page_templates/memories-template');
const contactTemplate = require('../public/js/contact-template');

router.route("/:id").get((req, res) => {
    ///memories/:id
    var photoLocation = req.params.id;
    console.log(photoLocation);
    //photoLocation = :id
    var htmlHead = htmlHeadTemplate.htmlHeadTemplate(photoLocation);
    var memories = memoriesTemplate.memoriesTemplate();
    var contact = contactTemplate.contactTemplate('flwfeeld@gmail.com', '+82 01029347310', 'instagram: j00my', 'Mullae-dong, Yeongdeungpo-gu, Seoul, S. Korea');
    //checks location of photo user wants to see
    if (photoLocation === 'choose-country') {
        res.send(htmlHead + memories + contact);
    } else if (photoLocation === 'Chicago') {
        ///photos/chicago
        var htmlBody = `
        <body>
        <div class="photo-top-container">
            <p><a href="/">Home</a></p>
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
    } else if (photoLocation === 'Seattle') {
        ///photos/seattle
        var htmlBody = `
        <body>
        <div class="photo-top-container">
            <p><a href="/">home</a></p>
            <p>${photoLocation}</p>
        </div>
        <div class="gallery-container">
            <ul>
                
            </ul>
        </div>
        </body>
        `;
        res.send(htmlHead + htmlBody + contact);
    } else {
        // if location is not defined
        app.use(function(req, res) {
            res.status(404).send('Sorry cant find that!')
        });
    }
});

module.exports = router;