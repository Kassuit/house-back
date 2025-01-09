'use strict';
const { characters } = require('./charNames.json')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // Si creo un objeto con una sola variable, 
    // se compilará automaticamente como { "variable": variable }
    const createdAt = new Date();
    const updatedAt = new Date();
    await queryInterface.bulkInsert('Users', characters.map((value, index) => ({
      ...value,
      createdAt,
      updatedAt
    })))
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
