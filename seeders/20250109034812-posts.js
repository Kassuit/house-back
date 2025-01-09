'use strict';
const { posts } = require('./comments.json');

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

    const createdAt = new Date();
    const updatedAt = new Date();

    const users = await queryInterface.sequelize.query(
      'SELECT id, name FROM "Users"',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    // Como hay usuarios sin comentarios, se mapean como undefined
    const postsInfo = users.flatMap((user) => posts[user.name]?.map(content => ({
      "user_id": user.id,
      content,
      createdAt,
      updatedAt
    }))).filter((value) => value !== undefined);

    queryInterface.bulkInsert("Posts", postsInfo, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
