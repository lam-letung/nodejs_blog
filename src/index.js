const express = require('express') ;
const {engine} = require('express-handlebars');
const morgan = require('morgan');
const  path = require('path') ;
const app = express();
const  route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname,'resources/views'));

// route init
route(app);

app.listen(3000);