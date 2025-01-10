'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Like, {
        foreignKey: "user_id",
        as: "like"
      });
      User.hasMany(models.Post, {
        foreignKey: "user_id",
        as: "post"
      });
      User.hasMany(models.Follower, {
        foreignKey: "followee_id",
        as: "follower"
      });
      User.hasMany(models.Follower, {
        foreignKey: "follower_id",
        as: "followee"
      });
      User.belongsToMany(models.User, {
        through: models.Follower,
        foreignKey: "followee_id",
        otherKey: 'follower_id',
        as: "follower_detail"
      });
      User.belongsToMany(models.User, {
        through: models.Follower,
        foreignKey: "follower_id",
        otherKey: 'followee_id',
        as: "followee_detail"
      });
      User.belongsToMany(models.Post, {
        through: models.Like,
        foreignKey: "user_id",
        otherKey: "post_id",
        as: "post_detail"
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};