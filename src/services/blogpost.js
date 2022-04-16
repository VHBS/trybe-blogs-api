const { BlogPost } = require('../database/models');
// const validation = require('../validations');

const createBlogPost = async ({ title, content, categoryIds }, userId) => {
  const newBlogPost = await BlogPost.create({ title, content, categoryIds, userId });

  return { code: 201, message: newBlogPost };
};

// const getAllBlogPosts = async () => {
//   const allBlogPosts = await BlogPost.findAll({
//     include: { model: User, as: 'user' },
//   });

//   return { code: 200, message: allBlogPosts };
// };

module.exports = { createBlogPost };