const postModel = require("../models/postModel");
const hello = () => {
  return "Hello World!";
};

const getPosts = async () => {
  const posts = await postModel.find({});
  return posts;
};
const getSingePost = async (id) => {
  const post = await postModel.findOne({ _id: id });
  return post;
};
module.exports = { hello, getPosts, getSingePost };
