const express = require('express');
const router = express.Router();

var app = express();

router.route("/:id").get((req, res) => {
    ///memories/:id
    var photoLocation = req.params.id;
    var title = "DOYOUSOUL? | Scrapbook"

    if (photoLocation === 'choose-country') {
        // changeNavColor();
        res.render('scrapbook/scrapbook-choose', {
        //layout.hbs
        title: title
    });
    } else if (photoLocation === 'London') {
        ///scrapbook/chicago
        res.render('scrapbook/london', {
            // title: title + ' | scrapbook',
            photoLocation: photoLocation,
            //layout.hbs
            title: title
        });
     
    } else if (photoLocation === 'Chicago') {
        ///scrapbook/chicago
        res.render('scrapbook/chicago', {
            // title: title + ' | scrapbook',
            photoLocation: photoLocation,
            //layout.hbs
            title: title
        });
     
    } else if (photoLocation === 'UIUC 18-19') {
        ///scrapbook/uiuc
        res.render('scrapbook/uiuc-18-19', {
            photoLocation: photoLocation,
            //layout.hbs
            title: title
        });
    } else if (photoLocation === 'Seoul 20') {
        ///scrapbook/south korea
        res.render('scrapbook/seoul-20', {
            // title: title + ' | scrapbook',
            photoLocation: photoLocation,
            //layout.hbs
            title: title
        });
    } else {
        // if location is not defined
        app.use(function(req, res) {
            res.status(404).send('Sorry cant find that!')
        });
    }
});

module.exports = router;