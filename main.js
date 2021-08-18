const express = require('express');
const app = express();
var template = require('./public/js/template.js');
// var projectRouter = require('./routes/projects');

//public 안에있는 정적인 파일들을 사용하기 위함
app.use(express.static('public'));

//홈페이지
app.get('/', function(req, res) {
    var currentTitle = 'NAMEHERE';
    var about = 
    `
    <section>
    <div id="about">
      <ul>
          <li>Joonmin Kweon</li>
          <li>Music Producer</li>
      </ul>   
    </div>
    </section>`;
    var projects = 
    `
    <section>
        <div>
            <div>
                <h3 class="page-title">Current Projects</h3>
            </div>
            <div id="current-projects">
                <ul>
                    <li><a href="/album-work">Album work</a></li>
                    <li><a href="/merch">Merch</a></li>
                    <li><a href="/webdev-and-design">Web Design & Development</a></li>
                </ul>
            </div>     
        </div>
    </section>
    `;
    var photos = `
    <section>
        <div>
          <div>
            <h3 class="page-title">Memories</h3>
          </div>
          <div class="gallery-container">
            <ul>
                <li><img src="/img/chicago-crown-fountain.jpg"></li>
                <li><img src="/img/chicago-crossing.jpg"></li>
                <li><img src="/img/chicago-taxi.jpg"></li>
                <li><img src="/img/chicago-caution.jpg"></li>
                <li><img src="/img/chicago-bean.jpg"></li>
            </ul>
          </div>
        </div>
    </section>
    `;
    var contact = 
    `
    <section>
        <div id="contact-info">
            <h3 class="page-title">Contact</h3>
            <ul>
                <li>email: flwfeeld@gmail.com  </li>
                <li>phone: +82 01029347310</li>
                <li>instagram: j00my</li>
                <li>Mullae-dong, Yeongdeungpo-gu, Seoul, S. Korea</li>
            </ul>
        </div>
    </section>
    `;
    var html = template.htmlHome(currentTitle, about, projects, photos, contact);
    res.send(html);
});

// album work page
app.get('/album-work', (req, res) => {
  var currentTitle = `
  <section>
    <a href="/">Home</a>
  </section>
  `;
  var about = 
  '';
  var albumWork = 
  `
  <section>
    <div>
        <h3 class="page-title">Album Work</h3>
    </div>
  </section>
  `;
  var photos = '';
  var contact = 
  `
  <section>
      <div id="contact-info">
          <h3 class="page-title">Contact</h3>
          <ul>
              <li>email: flwfeeld@gmail.com  </li>
              <li>phone: +82 01029347310</li>
              <li>instagram: j00my</li>
              <li>Mullae-dong, Yeongdeungpo-gu, Seoul, S. Korea</li>
          </ul>
      </div>
  </section>
  `;
  var html = template.htmlHome(currentTitle, about, albumWork, photos, contact);
  res.send(html);
});

// merch page
app.get('/merch', (req, res) => {
  var currentTitle = `
  <section>
    <a href="/">Home</a>
  </section>
  `;
  var about = 
  '';
  var merch = 
  `
  <section>
    <div>
        <h3 class="page-title">Merchandise</h3>
    </div>
  </section>
  `;
  var photos = '';
  var contact = 
  `
  <section>
      <div id="contact-info">
          <h3 class="page-title">Contact</h3>
          <ul>
              <li>email: flwfeeld@gmail.com  </li>
              <li>phone: +82 01029347310</li>
              <li>instagram: j00my</li>
              <li>Mullae-dong, Yeongdeungpo-gu, Seoul, S. Korea</li>
          </ul>
      </div>
  </section>
  `;
  // var list = template.showProjects(req.projects);
  console.log(req.projects);
  //req.projects 안에 우리의 현재 project들이 배열되어있다. 
  var html = template.htmlHome(currentTitle, about, merch, photos, contact);
  res.send(html);
});


// webdev page
app.get('/webdev-and-design', (req, res) => {
  var currentTitle = `
  <section>
    <a href="/">Home</a>
  </section>
  `;
  var about = 
  '';
  var webdev = 
  `
  <section>
    <div>
        <h3 class="page-title"Web Design & Development</h3>
    </div>
  </section>
  `;
  var photos = '';
  var contact = 
  `
  <section>
      <div id="contact-info">
          <h3 class="page-title">Contact</h3>
          <ul>
              <li>email: flwfeeld@gmail.com  </li>
              <li>phone: +82 01029347310</li>
              <li>instagram: j00my</li>
              <li>Mullae-dong, Yeongdeungpo-gu, Seoul, S. Korea</li>
          </ul>
      </div>
  </section>
  `;
  // var list = template.showProjects(req.projects);
  console.log(req.projects);
  //req.projects 안에 우리의 현재 project들이 배열되어있다. 
  var html = template.htmlHome(currentTitle, about, webdev, photos, contact);
  res.send(html);
});

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
