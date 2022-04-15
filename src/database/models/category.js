const Category = (sequelize, DataTypes) => {
  const CategoryResult = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tablename: 'Categories',
  });

  return CategoryResult;
};

module.exports = Category;  