import { GraphQLServer } from 'graphql-yoga';
import { connectDatabase } from './database';
import { graphqlPort } from './config';

require('dotenv-safe').config();


const options = {
  port: graphqlPort || '5000',
  bodyParserOptions: { limit: '50mb', type: 'application/json' },
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: process.env.NODE_ENV === 'production' ? false : '/playground'
};


(async () => {
  try {
    await connectDatabase();
  } catch (error) {
    console.log(error);
  }
})();

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`
  }
};


const server = new GraphQLServer(
  {
    typeDefs,
    resolvers
  }
);


server.start(options, ({ port }) => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
