const { sequelize, DataTypes, Model  } = require('../db');
const { Sequelize } = require('sequelize');

// TODO - create a Restaurant model
class Restaurant extends Model{};
    Restaurant.init({
        title: DataTypes.STRING,
    });
module.exports = Restaurant;