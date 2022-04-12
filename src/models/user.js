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

  // User.associate = (models) => {
  //   User.hasOne(models.Profile, {
  //     foreignKey: 'userId', as: 'profiles',
  //   });
  // };

  return UserResult;
};

module.exports = User; 