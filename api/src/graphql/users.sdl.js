import gql from 'graphql-tag'

export const schema = gql`
  type User {
    id: Int!
    email: String!
    displayName: String
    username: String
  }

  type Query {
    users: [User!]!
    user(id: Int!): User!
  }

  input CreateUserInput {
    email: String!
    displayName: String
    username: String
  }

  input UpdateUserInput {
    email: String
    displayName: String
    username: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
