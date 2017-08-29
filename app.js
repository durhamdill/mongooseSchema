const fs = require('fs');
const path = require('path');
const express = require('express');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const bluebird = require('bluebird');

const Pet = require('./models/pets');
const port = 3000;

const mongoURL = 'mongodb://localhost:27017/pets';
mongoose.connect(mongoURL, {useMongoClient: true});
mongoose.Promise = require('bluebird');

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static('static'));

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache')
// app.set('layout', 'layout');

app.get('/:id/', function (req, res) {
  Pet.findOne({_id: req.params.id}).then(function (pet) {
    res.render("pet_profile", {pet: pet});
  })
})

app.get('/add/', function (req, res) {
  res.render('add_pet');
});

app.post('/add/', function (req, res) {
  Pet.create(req.body)
  .then(function (pet) {
    res.redirect('/');
  })
  // .catch(function (error) {
  //   let errorMsg;
  //   if (error.code === DUPLICATE_RECORD_ERROR) {
  //     // make message about duplicate
  //     errorMsg = `The recipe name "${req.body.name}" has already been used.`
  //   } else {
  //     errorMsg = "You have encountered an unknown error."
  //   }
  //   res.render('new_recipe', {errorMsg: errorMsg});
  // })
});


app.get('/', function (req, res) {
  Pet.find().then(function (pet) {
    res.render('index', {pet: pet});
  })
})


// var Pets = mongoose.Schema;




// var dog = new Pets({name: "Murph"});
// console.log(dog.toObject());

module.exports = app;

app.listen(port, function(req, res){
   console.log('Opening pet database...');
 });
