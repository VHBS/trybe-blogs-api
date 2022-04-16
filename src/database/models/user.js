const User = (sequelize, DataTypes) => {
  const UserResult = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
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