'use strict';
const { followers } = require('./follower.json')

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

    const users = await queryInterface.sequelize.query(
      'SELECT id, name FROM "Users"',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const createdAt = new Date();
    const updatedAt = new Date();


    const get_follower_id = (follower) => users.find((value, index, obj) => value.name === follower)?.id

    const follower_entries = followers.map(({ follower, followee }) => {

      const follower_id = get_follower_id(follower);
      const followee_id = get_follower_id(followee);

      if (!followee_id || !follower_id) return undefined

      return { follower_id, followee_id, createdAt, updatedAt };
    }).filter((entry) => entry !== undefined);

    await queryInterface.bulkInsert('Followers', follower_entries, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Followers", null, {});
  }
};
