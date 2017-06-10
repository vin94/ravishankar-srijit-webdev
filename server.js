var app = require('./express');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(app.express.static(__dirname + '/public'));

require("./assignment/app");
require ("./test/app.js")(app);


var port = process.env.PORT || 3000;

app.listen(port);