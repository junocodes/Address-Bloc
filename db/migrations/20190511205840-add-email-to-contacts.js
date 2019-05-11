"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("Contacts", "email", Sequelize.STRING)
      .then(() => {
        return queryInterface.addColumn("Contacts", "email", Sequelize.STRING);
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Contacts", "email").then(() => {
      return queryInterface.removeColumn("Contacts", "email");
    });
  }
};
