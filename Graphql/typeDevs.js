const { gql } = require("apollo-server-express");

const typeDevs = gql`
  type PostObject {
    id: ID
    title: String
    desc: String
  }

  input postInput {
    title: String
    desc: String
  }
  type Query {
    hello: String
    getPosts: [PostObject]
    getSingePost(id: ID): PostObject
  }

  type Mutation {
    createPost(postData: postInput): PostObject
    deletePost(id: ID): String
    updatePost(id: ID, updateData: postInput): PostObject
  }
`;

module.exports = typeDevs;
