const { DataTypes } = require('sequelize');

const Attributes = {
  title: { 
    allowNull: false,
    type: DataTypes.STRING,
  },
  content: { 
    allowNull: false,
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
};

const BlogPost = (sequelize) => {
  const BlogPostResult = sequelize.define('BlogPost',
    Attributes, {
    timestamps: false,
  });

  BlogPostResult.associate = (models) => {
    BlogPostResult.belongsTo(models.User, { foreingKey: 'userId', as: 'user' });
  };

  return BlogPostResult;
};

module.exports = BlogPost;  