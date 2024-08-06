const { createPost, deletePost, updatePost } = require("./mutation");
const { hello, getPosts, getSingePost } = require("./query");

const resolvers = {
  Query: {
    hello: () => {
      return hello();
    },
    getPosts: async () => {
      const allPosts = await getPosts();
      console.log(allPosts);
      return allPosts;
    },
    getSingePost: async (parent, args, context, info) => {
      return getSingePost(args.id);
    },
  },
  Mutation: {
    createPost: (parent, args, context, info) => {
      return createPost(args.postData);
    },
    deletePost: (parent, args, context, info) => {
      return deletePost(args.id);
    },
    updatePost: (parent, args, context, info) => {
      const { id, updateData } = args;
      const post = updatePost(id, updateData);
      console.log(post);
      return post;
    },
  },
};

module.exports = resolvers;
