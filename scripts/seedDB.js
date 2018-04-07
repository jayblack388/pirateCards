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
    "image": "/img/strawhat/luffy.png",
    "position": "Captain",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Pirate Hunter Roronoa Zoro",
    "image": "/img/strawhat/zoro.png",
    "position": "First Mate",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Cat Burglar Nami",
    "image": "/img/strawhat/nami.png",
    "position": "Navigator",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": 'God Usopp',
    "image": "/img/strawhat/usopp.png",
    "position": "Sniper",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Black Leg Sanji",
    "image": "/img/strawhat/sanji.png",
    "position": "Ship Cook",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Cotton Candy Lover Chopper",
    "image": "/img/strawhat/chopper.png",
    "position": "Doctor",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Demon Child Nico Robin",
    "image": "/img/strawhat/robin.png",
    "position": "Ship Archeologist",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": 'Iron Man Franky',
    "image": "/img/strawhat/franky.png",
    "position": "Ship Mechanic",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": 'Soul King Brook',
    "image": "/img/strawhat/brook.png",
    "position": "Ship Musician",
    "crew": "Strawhat Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Spandam",
    "image": "/img/cp9/spandam.png",
    "position": "Chief",
    "crew": "CP9",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Rob Lucci",
    "image": "/img/cp9/lucci.png",
    "position": "Leopard Assassin",
    "crew": "CP9",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Kaku",
    "image": "/img/cp9/kaku.png",
    "position": "Giraffe Assassin",
    "crew": "CP9",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Jabra",
    "image": "/img/cp9/jabra.png",
    "position": "Wolf Assassin",
    "crew": "CP9",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Blueno",
    "image": "/img/cp9/blueno.png",
    "position": "Door Assassin",
    "crew": "CP9",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Kumadori",
    "image": "/img/cp9/kumadori.jpg",
    "position": "Hermit Assassin",
    "crew": "CP9",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Fukuro",
    "image": "/img/cp9/fukuro.png",
    "position": "Loudmouth Assassin",
    "crew": "CP9",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Kalifa",
    "image": "/img/cp9/kalifa.png",
    "position": "Soapy Assassin",
    "crew": "CP9",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Nero",
    "image": "/img/cp9/nero.png",
    "position": "Assassin in Training",
    "crew": "CP9",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Crocodile",
    "image": "/img/baroque/croc.png",
    "position": "Mr. 0",
    "crew": "Baroque Works",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Nico Robin",
    "image": "/img/baroque/robin.png",
    "position": "Ms. All-Sunday",
    "crew": "Baroque Works",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Daz Bones",
    "image": "/img/baroque/daz.png",
    "position": "Mr. 1",
    "crew": "Baroque Works",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Paula",
    "image": "/img/baroque/paula.png",
    "position": "Ms. Doublefinger",
    "crew": "Baroque Works",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Bentham",
    "image": "/img/baroque/bentham.png",
    "position": "Mr. 2",
    "crew": "Baroque Works",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Galdino",
    "image": "/img/baroque/galdino.png",
    "position": "Mr. 3",
    "crew": "Baroque Works",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Ms. Golden Week",
    "image": "/img/baroque/golden.png",
    "position": "Ms. Golden Week",
    "crew": "Baroque Works",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Mr. 4",
    "image": "/img/baroque/mr4.png",
    "position": "Mr. 4",
    "crew": "Baroque Works",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Ms. Merry Christmas",
    "image": "/img/baroque/xmas.png",
    "position": "Ms. Merry Christmas",
    "crew": "Baroque Works",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Mr. 5",
    "image": "/img/baroque/mr5.png",
    "position": "Mr. 5",
    "crew": "Baroque Works",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Ms. Valentine",
    "image": "/img/baroque/val.png",
    "position": "Ms. Valentine",
    "crew": "Baroque Works",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Mr. 13",
    "image": "/img/baroque/mr13.png",
    "position": "Mr. 13",
    "crew": "Baroque Works",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Ms. Friday",
    "image": "/img/baroque/friday.png",
    "position": "Ms. Friday",
    "crew": "Baroque Works",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Marshall D. Teach",
    "image": "/img/blackbeard/teach.png",
    "position": "Captain",
    "crew": "Blackbeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Champion Jesus Burgess",
    "image": "/img/blackbeard/burgess.png",
    "position": "Helmsman",
    "crew": "Blackbeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Shiliew of the Rain",
    "image": "/img/blackbeard/shiliew.png",
    "position": "Ex-Warden",
    "crew": "Blackbeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Laffitte the Demon Sheriff",
    "image": "/img/blackbeard/laffitte.png",
    "position": "Navigator",
    "crew": "Blackbeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Van Augur the Supersonic",
    "image": "/img/blackbeard/augur.png",
    "position": "Sniper",
    "crew": "Blackbeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Death God Doc Q",
    "image": "/img/blackbeard/doc.png",
    "position": "Doctor",
    "crew": "Blackbeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Colossal Battleship Sanjuan Wolf",
    "image": "/img/blackbeard/wolf.png",
    "position": "Uber Giant Escapee",
    "crew": "Blackbeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Vasco Shot the Heavy Drinker",
    "image": "/img/blackbeard/vasco.png",
    "position": "Escapee",
    "crew": "Blackbeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Crescent Moon Catarina Devon",
    "image": "/img/blackbeard/catarina.png",
    "position": "Escapee",
    "crew": "Blackbeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Alvalo Pizarro the Corrupt King",
    "image": "/img/blackbeard/pizarro.png",
    "position": "Escapee",
    "crew": "Blackbeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Dracule Mihawk",
    "image": "/img/shichi/mihawk.png",
    "position": "World's Greatest Swordsman",
    "crew": "Shichibukai",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Bartholomew Kuma",
    "image": "/img/shichi/kuma.png",
    "position": "The Tyrant",
    "crew": "Shichibukai",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Boa Hancock",
    "image": "/img/shichi/hancock.png",
    "position": "Empress of Amazon Lily",
    "crew": "Shichibukai",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Buggy the Star Clown",
    "image": "/img/shichi/buggy.png",
    "position": "Chief of Buggy's Pirate Dispatch",
    "crew": "Shichibukai",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Edward Weevil",
    "image": "/img/shichi/weevil.png",
    "position": "Whitebeard Jr?",
    "crew": "Shichibukai",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Crocodile",
    "image": "/img/shichi/croc.png",
    "position": "Former President of Baroque Works",
    "crew": "Shichibukai",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Donquixote Doflamingo",
    "image": "/img/shichi/doffy.png",
    "position": "King of Dressrosa",
    "crew": "Shichibukai",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Gekko Moriah",
    "image": "/img/shichi/moriah.png",
    "position": "Captain of Thriller Bark",
    "crew": "Shichibukai",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Jinbe, Knight of the Sea",
    "image": "/img/shichi/jinbe.png",
    "position": "Captain of the Sun Pirates",
    "crew": "Shichibukai",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Marshall D. Teach",
    "image": "/img/shichi/teach.png",
    "position": "Captain of the Blackbeard Pirates",
    "crew": "Shichibukai",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Trafalgar D. Water Law",
    "image": "/img/shichi/law.png",
    "position": "Captain of the Heart Pirates",
    "crew": "Shichibukai",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Monkey D. Dragon",
    "image": "/img/revs/dragon.png",
    "position": "Leader",
    "crew": "Revolutionary Army",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Sabo",
    "image": "/img/revs/sabo.png",
    "position": "Chief of Staff",
    "crew": "Revolutionary Army",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Emporio Ivankov",
    "image": "/img/revs/ivankov.png",
    "position": "Okama King",
    "crew": "Revolutionary Army",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Inazuma",
    "image": "/img/revs/inazuma.png",
    "position": "Okama Soldier",
    "crew": "Revolutionary Army",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Kuma",
    "image": "/img/revs/kuma.png",
    "position": "Former Member",
    "crew": "Revolutionary Army",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Terry Gilteo",
    "image": "/img/revs/terry.png",
    "position": "Revolutionary Member",
    "crew": "Revolutionary Army",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Bunny Joe",
    "image": "/img/revs/joe.png",
    "position": "Revolutionary Member",
    "crew": "Revolutionary Army",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Koala",
    "image": "/img/revs/koala.png",
    "position": "Revolutionary Operative",
    "crew": "Revolutionary Army",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Hack",
    "image": "/img/revs/hack.png",
    "position": "Revolutionary Operative",
    "crew": "Revolutionary Army",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Raise Max",
    "image": "/img/revs/max.png",
    "position": "Revolutionary Operative",
    "crew": "Revolutionary Army",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Nico Robin",
    "image": "/img/revs/robin.png",
    "position": "Revolutionary Ally",
    "crew": "Revolutionary Army",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Edward Newgate",
    "image": "/img/whitebeard/whitebeard.png",
    "position": "Captain",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Marco the Phoenix",
    "image": "/img/whitebeard/marco.png",
    "position": "1st Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Firefist Ace",
    "image": "/img/whitebeard/ace.png",
    "position": "2nd Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Diamond Jozu",
    "image": "/img/whitebeard/jozu.png",
    "position": "3rd Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Thatch",
    "image": "/img/whitebeard/thatch.png",
    "position": "4th Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Flower Sword Vista",
    "image": "/img/whitebeard/vista.png",
    "position": "5th Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Blamenco",
    "image": "/img/whitebeard/blamenco.png",
    "position": "6th Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Rakuyo",
    "image": "/img/whitebeard/rakuyo.png",
    "position": "7th Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Namur",
    "image": "/img/whitebeard/namur.png",
    "position": "8th Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Blenheim",
    "image": "/img/whitebeard/blenheim.png",
    "position": "9th Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Curiel",
    "image": "/img/whitebeard/curiel.png",
    "position": "10th Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Kingdew",
    "image": "/img/whitebeard/kingdew.png",
    "position": "11th Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Haruta",
    "image": "/img/whitebeard/haruta.png",
    "position": "12th Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Water Buffalo Atmos",
    "image": "/img/whitebeard/atmos.png",
    "position": "13th Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Speed Jiru",
    "image": "/img/whitebeard/jiru.png",
    "position": "14th Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Fossa",
    "image": "/img/whitebeard/fossa.png",
    "position": "15th Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  {
    "date": new Date(Date.now()),
    "name": "Izo",
    "image": "/img/whitebeard/izo.png",
    "position": "16th Division Commander",
    "crew": "Whitebeard Pirates",
    "selected": false
  },
  
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
