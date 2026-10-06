const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Booking = sequelize.define("Booking", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  pickup: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  destination: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cabType: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  persons: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  message: {
    type: DataTypes.TEXT,
    allowNull: true,
  }

});

module.exports = Booking;