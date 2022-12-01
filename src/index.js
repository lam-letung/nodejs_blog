const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const route = require('./routes');
const app = express();
const db = require('./config/db');

// connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.json());
const bodyParser = require('body-parser');

app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());

// route init
route(app);

app.listen(3000);
