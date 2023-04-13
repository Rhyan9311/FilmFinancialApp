// const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const db = require("../db");

const Filmmaker = db.define("filmmaker", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantityofProjects: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  yearsOfExperience: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  previousSuccess: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue:
      "https://cdn.pixabay.com/photo/2016/08/18/23/04/yale-university-1604158_1280.jpg",
    validate: {
      isUrl: true,
    }
  }
});

module.exports = Filmmaker;
