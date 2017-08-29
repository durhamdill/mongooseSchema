const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoURL = 'mongodb://localhost:27017/newdb';

mongoose.Promise = require('bluebird');
mongoose.connect(mongoURL);
const Pets = require('./models/pets').model;
// var Pets = mongoose.Schema;

const app = express();

var dog = new Pets({name: "Murph"});
console.log(dog.toObject());

module.exports = app;
