const { DataTypes } = require("sequelize");
const db = require("../db");

const Investor = db.define("investor", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  riskTolerance: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  investmentAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  investmentLength: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Investor;
