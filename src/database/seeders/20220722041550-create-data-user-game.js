'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert("user_games", [{
      username: "Anto",
      password: "Anto",
      createdAt: new Date (),
      updatedAt: new Date ()
     }],)
     await queryInterface.bulkInsert("user_games", [{
      username: "Arthur",
      password: "Arthur",
      createdAt: new Date (),
      updatedAt: new Date ()
     }],)
     await queryInterface.bulkInsert("user_games", [{
      username: "Cello",
      password: "Cello",
      createdAt: new Date (),
      updatedAt: new Date ()
     }],)
     await queryInterface.bulkInsert("user_games", [{
      username: "Davina",
      password: "Davina",
      createdAt: new Date (),
      updatedAt: new Date ()
     }],)
     await queryInterface.bulkInsert("user_games", [{
      username: "Fian",
      password: "Fian",
      createdAt: new Date (),
      updatedAt: new Date ()
     }],)
    },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('user_games', null);
  }
};
