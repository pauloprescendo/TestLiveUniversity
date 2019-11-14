const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();

app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

const port = process.env.PORT || 3333;
app.listen(port);
