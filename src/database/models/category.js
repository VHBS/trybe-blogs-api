const Category = (sequelize, DataTypes) => {
  const CategoryResult = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  return CategoryResult;
};

module.exports = Category;