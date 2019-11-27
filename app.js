let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./src/routes/user')(app);
require('./src/routes/panel')(app);

app.listen(3000);