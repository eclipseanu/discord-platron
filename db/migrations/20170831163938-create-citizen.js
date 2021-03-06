'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Citizens', {
            id: {
                type: Sequelize.STRING,
                primaryKey: true,
                allowNull: false
            },
            discord_id: {
                type: Sequelize.STRING,
                allowNull: false
            },
            verified: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            reclaiming: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            code: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: queryInterface => {
        return queryInterface.dropTable('Citizens');
    }
};
