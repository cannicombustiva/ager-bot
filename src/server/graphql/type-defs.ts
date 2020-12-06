import { gql } from 'apollo-server';

export default gql`
  type Birthday {
    id: ID!
    firstName: String!
    lastName: String!
    day: String!
  }
  type User {
    id: ID!
    username: String!
    chatId: Number!
    is_bot: Boolean!
  }
  type Query{
    getBirthdays: [Birthday]
  }
`;
