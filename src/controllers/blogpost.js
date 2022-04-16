const blogPostServices = require('../services/blogpost');

const create = async (req, res) => {
  // const {  } = req.body;
  // console.log(data);
  const result = await blogPostServices.createBlogPost(req.body, req.userId);

  return res.status(result.code).json(result.message);
};

const getAll = async (_req, res) => {
  const result = await blogPostServices.getAllBlogPosts();

  return res.status(result.code).json(result.message);
};

module.exports = { create, getAll };