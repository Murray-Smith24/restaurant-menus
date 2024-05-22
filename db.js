const { Sequelize, DataTypes, Model } = require('sequelize');
const path = require('path');


// TODO - connect to db via sequelize
const db = new Sequelize({
dialect: "sqlite",
storage: path.join(__dirname, "db.sqlite")
});
module.exports = {
    Sequelize,
};
