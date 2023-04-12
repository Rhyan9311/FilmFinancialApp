//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Investment = require('./models/Investment')

//associations could go here!
User.hasMany(Investment);

module.exports = {
  db,
  models: {
    User,
    Investment,

  },
}
