const Sequelize = require('sequelize');
const db = require('../index');

// Model
module.exports = db.define('user', {
  userId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  userPassword: {
    type: Sequelize.STRING,
  },
  userImageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stickpng.com%2Fimg%2Ficons-logos-emojis%2Fusers%2Fsimple-user-icon&psig=AOvVaw21ULTQVWizDJ-WUJfoBWs0&ust=1625167498217000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLjEkIGLwPECFQAAAAAdAAAAABAO',
  },
});
