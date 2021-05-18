import { ApolloServer, gql } from 'apollo-server';
import resolvers from './http/resolvers';

const typeDefs = gql`
type User {
  id: Int!
  name: String!
  email: String!
}

type Query {
  users: [User!]!
  user(id: Int!): User
}

type Mutation {
  createUser(name: String!, email: String!): User
}
`

const app = new ApolloServer({
  typeDefs,
  resolvers
})


app.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
}).catch(console.error)