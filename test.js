var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mysql = require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dbroute = require('./routes/createdb')
const port = process.env.PORT || 3001;
var app = express();

const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'appdb'
   
        
});

db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('MySql connected...');
})