//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Investor = require("./models/Investor");
const Filmmaker = require("./models/Filmmaker");

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
