
let express = require('express');
let path = require('path');
let open = require('open');

let port = 3000;
let app = express();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if (err) {
    console.log(err);
  } else {
    open('http//localhost:'+port);
  }
})