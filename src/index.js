const express = require('express');
const morgan = require('morgan');
const path = require('path')


const { mongoose } = require('./database');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

//Settings
app.set('port', process.env.PORT || 3000);

//Midleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/', require('./routes/routes.js'));

//Static files
app.use(express.static(path.join(__dirname,'public')))

//Starting server
app.listen(app.get('port'), ()=> {
    console.log(`server on port ${app.get('port')}`)
})
