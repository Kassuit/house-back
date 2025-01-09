'use strict';

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

    const posts = await queryInterface.sequelize.query(
      'SELECT id as post_id FROM "Posts"'
      , { type: queryInterface.sequelize.QueryTypes.SELECT });

    const users = await queryInterface.sequelize.query(
      'SELECT id as user_id FROM "Users"'
      , { type: queryInterface.sequelize.QueryTypes.SELECT });

    const indicatriz = (probabilidad) => Math.random() < probabilidad;

    const like_entries = posts
      .flatMap(({ post_id }) => users
        .filter(() => indicatriz(0.2))
        .map(({ user_id }) => ({ user_id, post_id, createdAt, updatedAt })));

    await queryInterface.bulkInsert('Likes', like_entries, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Likes', null, {});
  }
};
