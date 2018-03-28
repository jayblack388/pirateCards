const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the pirates below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactpirateclicky",
  {
    useMongoClient: true
  }
);

const pirateSeed = [
  {
    "date": new Date(Date.now()),
    "name": "Monkey D. Luffy",
    "image": "/img/luffy.png",
    "position": "Captain",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Roronoa Zoro",
    "image": "/img/zoro.png",
    "position": "First Mate",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Cat Burglar Nami",
    "image": "/img/nami.png",
    "position": "Navigator",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Usopp",
    "image": "/img/usopp.png",
    "position": "Sniper",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Black Leg Sanji",
    "image": "/img/sanji.png",
    "position": "Ship Cook",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Tony Tony Chopper",
    "image": "/img/chopper.png",
    "position": "Doctor",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Nico Robin",
    "image": "/img/robin.png",
    "position": "Ship Archeologist",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Franky",
    "image": "/img/franky.png",
    "position": "Ship Mechanic",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Brook",
    "image": "/img/brook.png",
    "position": "Ship Musician",
    "crew": "Strawhat Pirates",
    "selected": false
  }
];

db.Pirate
  .remove({})
  .then(() => db.Pirate.collection.insertMany(pirateSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
