const express = require('express');
const router = express.Router();

router.route("/:id").get((req, res) => {
    ///memories/:id
    var photoLocation = req.params.id;
    var title = "UNDEFINED | Scrapbook"

    if (photoLocation === 'choose-country') {
        // changeNavColor();
        res.render('scrapbook/scrapbook-choose', {
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
     
    } else if (photoLocation === 'UIUC') {
        ///scrapbook/uiuc
        res.render('scrapbook/uiuc', {
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