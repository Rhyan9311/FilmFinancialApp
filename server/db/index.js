//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/UserDB");
const Investor = require("./models/InvestorDB");
const Filmmaker = require("./models/FilmmakerDB");

//associations could go here!
Filmmaker.hasMany(Investor);
Investor.hasOne(Filmmaker);

module.exports = {
  db,
  models: {
    User,
    Investor,
    Filmmaker,
  },
};
