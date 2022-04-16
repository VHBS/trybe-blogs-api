module.exports = (sequelize) => {
  const PostsCategories = sequelize.define('PostsCategories', {},
    { timestamps: false });

    PostsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'blogposts',
    });
  };

  return PostsCategories;
};