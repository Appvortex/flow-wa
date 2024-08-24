import { QueryInterface, DataTypes } from "sequelize";
module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.addColumn("DialogChatBots", "queueId", {
      type: DataTypes.INTEGER,
      references: { model: "Queues", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("DialogChatBots", "queueId");
  }
};
