'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User', [
        // {
        //   email: 'greenAct@naver.com',
        //   nickName: '그린액트',
        //   password: 'green1111'
        // },

        ], {});

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('User', null, {});
  }
};
