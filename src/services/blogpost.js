const { BlogPost, User, Category, PostsCategories } = require('../database/models');

const createBlogPost = async ({ title, content, categoryIds }, userId) => {
  const newBlogPost = await BlogPost.create({ title, content, categoryIds, userId });

  await Promise.all(categoryIds.map((id) => PostsCategories
    .create({ postId: newBlogPost.id, categoryId: id })));

  return { code: 201, message: newBlogPost };
};

const getAllBlogPosts = async () => {
  const allBlogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, 
        as: 'categories', 
        attributes: ['id', 'name'],
      //   include: [{
      //     model: PostsCategories,
      //     attributes: [],
      // }],
    },
    ],
  });

  return { code: 200, message: allBlogPosts };
};

module.exports = { createBlogPost, getAllBlogPosts };