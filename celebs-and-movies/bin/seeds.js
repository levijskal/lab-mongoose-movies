const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/celebs-and-movies', {useMongoClient: true})
  .then(() => {


const tomCruise = {name: "Tom Cruise", occupation: "Crazy Guy Movie Star", catchphrase: "I'm not crazy"}

const angelina = {name: "Angelina Jolie", occupation: "She used to be in movies", catchphrase: "I'm angelina Jolie!"}

const stormTroop = {name: "storm trooper", occupation: "missing shots", catchphrase: "oh no, i missed"}


        Celebrity.create([tomCruise, angelina, stormTroop])
        .then((response)=>{
            console.log(response)
            mongoose.connection.close();


    




        })
        .catch((err)=>{
            console.log(err)
        })

  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

  // MOVIES =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- <<<<<<<<<<<<<<<<

  mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/celebs-and-movies', {useMongoClient: true})
  .then(() => {


const sinCity= {title: "Sin City", genre: "dark movie", plot: "save nancy"}

const publicEnemies = {title: "Public Enemies", genre: "Gangster", plot: "rob a bank"}

const gangsterSquad = {title: "Gangster Squad", genre: "Gangster", plot: "here comes santa clause"}


        Movie.create([sinCity, publicEnemies, gangsterSquad])
        .then((response)=>{
            console.log(response)
            mongoose.connection.close();
        })
        .catch((err)=>{
            console.log(err)
        })

  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });