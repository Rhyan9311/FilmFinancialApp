// const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const db = require("../db");

const Investment = db.define("investment", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  symbol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  budget: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  previousSuccess: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});


module.exports = Investment;
