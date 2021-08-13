let express = require('express');
let path = require('path');
let serveStatic = require('serve-static');
require('dotenv').config();

let app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));

let port = process.env.PORT || 9000;
app.listen(port);
console.log('server started ' + port);