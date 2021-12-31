var express = require('express');
var expressHbs = require('express-handlebars');


var indexRouter = require("./routes/index");
var artistsRouter = require("./routes/artists");
var projectsRouter = require("./routes/projects");
var scrapbookRouter = require("./routes/scrapbook");
var noticeRouter = require("./routes/notice");

var app = express();


// view engine setup
app.engine('.hbs', expressHbs({
  defaultLayout: 'layout',  
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

//public 안에있는 정적인 파일들을 사용하기 위함
app.use(express.static('public'));

//routes

app.use("/", indexRouter);
app.use("/artists", artistsRouter);
app.use("/scrapbook", scrapbookRouter);
app.use("/projects", projectsRouter);
app.use("/notice", noticeRouter);

//error handlers
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!')
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(process.env.PORT || 5000, function() {
  console.log('Example app listening on port 5000!')
});
