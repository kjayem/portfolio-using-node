const express = require('express');
const app = express();
var template = require('./public/js/template.js');
var aboutTemplate = require('./public/js/about-template');
var projectTemplate = require('./public/js/projects-template');
var photosTemplate = require('./public/js/photos-template');
var contactTemplate = require('./public/js/contact-template');
const projects = require("./routes/projects");


//public 안에있는 정적인 파일들을 사용하기 위함
app.use(express.static('public'));

//use the projects.js file to handle endpoints that start with /projects
app.use("/projects", projects);

//homepage
app.get('/', (req, res) => {
    var currentTitle = 'NAMEHERE';
    var about = aboutTemplate.aboutTemplate('Joonmin Kweon', 'Music Producer');
    var projects = projectTemplate.projectTemplate();
    var photos = photosTemplate.photosTemplate();
    var contact = contactTemplate.contactTemplate('flwfeeld@gmail.com', '+82 01029347310', 'instagram: j00my', 'Mullae-dong, Yeongdeungpo-gu, Seoul, S. Korea');
    var html = template.htmlHome(currentTitle, about, projects, photos, contact);
    res.send(html);
});

//error handlers
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!')
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
