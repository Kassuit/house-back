'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Follower.belongsTo(models.User, {
        foreignKey: "follower_id",
        as: "follower"
      })
      Follower.belongsTo(models.User, {
        foreignKey: "followee_id",
        as: "followee"
      })
    }
  }
  Follower.init({
    follower_id: DataTypes.INTEGER,
    followee_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Follower',
  });
  return Follower;
};