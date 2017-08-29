const fs = require('fs');
const path = require('path');
const express = require('express');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const bluebird = require('bluebird');

const Pets = require('./models/pets');

const mongoURL = 'mongodb://localhost:27017/pets';
mongoose.connect(mongoURL, {useMongoClient: true});
mongoose.Promise = require('bluebird');

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache')
app.set('layout', 'layout');



// var Pets = mongoose.Schema;



// var dog = new Pets({name: "Murph"});
// console.log(dog.toObject());

module.exports = app;

app.listen(port, function(req, res){
   console.log('Starting mystery word game...');
 });
