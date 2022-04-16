const { DataTypes } = require('sequelize');

const Atrributes = {
  displayName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

const User = (sequelize) => {
  const UserResult = sequelize.define('User',
    Atrributes, {
    timestamps: false,
    tablename: 'Users',
  });

  UserResult.associate = (models) => {
    UserResult.hasOne(models.BlogPost, {
      foreignKey: 'userId', as: 'blogposts',
    });
  };

  return UserResult;
};

module.exports = User;  