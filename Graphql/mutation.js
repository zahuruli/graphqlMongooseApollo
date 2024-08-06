const postModel = require("../models/postModel");

const createPost = async (data) => {
  const posts = await postModel.create(data);
  return posts;
};

const deletePost = async (id) => {
  await postModel.findByIdAndDelete(id);
  return "Deleted successfully !";
};

const updatePost = async (id, updateData) => {
  const post = await postModel.findByIdAndUpdate(
    id,
    { ...updateData },
    { new: true }
  );
  console.log(post);
  return post;
};
module.exports = { createPost, deletePost, updatePost };
