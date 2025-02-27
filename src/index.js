const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes/index');
const db = require('./config/db/index');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'))
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'));

// Template engine

app.engine('hbs', engine({
  extname: '.hbs',
  helpers:{
    sum: (a,b) => a+b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// route
// route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})