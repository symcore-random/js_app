const express = require('express');
const path = require('path');

const app = express();
const port = 8009;


// sendFile will go here
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
  //console.log(req.body);
});


require('./include/include')(app);


app.listen(port);
console.log('Frontend server started at http://localhost:' + port);