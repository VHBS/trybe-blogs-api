const BlogPost = (sequelize, DataTypes) => {
  const BlogPostResult = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATEONLY,
    updated: DataTypes.DATEONLY,
  }, {
    timestamps: false,
    tablename: 'Categories',
  });

  BlogPostResult.associate = (models) => {
    BlogPostResult.belongsTo(models.User, { foreingKey: 'userId', as: 'user' });
  };

  return BlogPostResult;
};

module.exports = BlogPost;  