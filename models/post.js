'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user"
      });
      Post.hasMany(models.Like, {
        foreignKey: "post_id",
        as: "like"
      });
      Post.belongsToMany(models.User, {
        through: models.Like,
        foreignKey: "post_id",
        otherKey: "user_id",
        as: "like_detailed"
      });
    }
  }
  Post.init({
    user_id: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};