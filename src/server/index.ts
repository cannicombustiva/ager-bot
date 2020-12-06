import { ApolloServer } from 'apollo-server';
import * as mongoose from 'mongoose';

import * as resolvers from './graphql/resolvers';
import typeDefs from './graphql/type-defs';
import { CONFIG } from '../config';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// connect to db before we start the server. Actually we need a connection string, we can find it in config.js
void mongoose.connect(CONFIG.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('MongoDB connected');
    return server.listen({ port: 3000 });
  }).then((res) => {
    console.log(`server running at ${res.url}`);
  });
