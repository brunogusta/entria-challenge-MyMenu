import { GraphQLServer } from 'graphql-yoga';
import * as express from 'express';
import path from 'path';
import { connectDatabase } from './database';

import { schema } from './schema';
import { getUser } from './utils/auth';
import middlewares from './middlewares';

require('dotenv-safe').config();


const options = {
  port: process.env.GRAPHQL_PORT || '5000',
  bodyParserOptions: { limit: '50mb', type: 'application/json' },
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: process.env.NODE_ENV === 'production' ? false : '/graphql'
};


(async () => {
  try {
    await connectDatabase();
  } catch (error) {
    console.log(error);
  }
})();

const contextSettings = async ({ request, connection }) => {
  const { user } = await getUser(
    request ? request.headers.authorization : connection.context.headers.authorization
  );

  return {
    ...request,
    user
  };
};


const server = new GraphQLServer(
  {
    schema,
    context: contextSettings,
    middlewares
  }
);

server.express.use('/image', express.static(path.resolve(__dirname, 'uploads', 'resized')));


server.start(options, ({ port }) => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
