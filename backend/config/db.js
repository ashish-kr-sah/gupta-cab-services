const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/gupta_cab",
  {
    dialect: "postgres",
    logging: false,
    dialectOptions: process.env.DATABASE_URL
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : {},
    define: {
      timestamps: true,
    },
  }
);

const ensureDatabase = async () => {
  // Neon PostgreSQL database is already created.
  // No database creation is required here.
};

module.exports = sequelize;
module.exports.ensureDatabase = ensureDatabase;