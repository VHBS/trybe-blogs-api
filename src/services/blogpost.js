const { BlogPost, User, Category, PostsCategories } = require('../database/models');

const create = async ({ title, content, categoryIds }, userId) => {
  const newBlogPost = await BlogPost.create({ title, content, categoryIds, userId });

  await Promise.all(categoryIds.map((id) => PostsCategories
    .create({ postId: newBlogPost.id, categoryId: id })));

  return { code: 201, message: newBlogPost };
};

const getAll = async () => {
  const allBlogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { code: 200, message: allBlogPosts };
};

const getById = async (id) => {
  const blogById = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!blogById) return { code: 404, message: { message: 'Post does not exist' } };

  return { code: 200, message: blogById };
};

module.exports = { create, getAll, getById };