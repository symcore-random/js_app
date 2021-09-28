const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 7000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);
require('./test/test')(app);

app.listen(port);
console.log('Backend server started at http://localhost:' + port);


