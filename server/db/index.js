const Sequelize = require('sequelize');

// Database
const DATABASE = 'chatlingual';
module.exports = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${DATABASE}`, // Heroku compatible
  {
    logging: false,
  }
);
