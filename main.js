const express = require('express');
const app = express();
const index = require("./routes/index");
const memories = require("./routes/memories");

//public 안에있는 정적인 파일들을 사용하기 위함
app.use(express.static('public'));

//homepage
app.use("/", index);

//memories page
app.use("/memories", memories);

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
