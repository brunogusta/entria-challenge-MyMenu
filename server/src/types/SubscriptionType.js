import { GraphQLObjectType } from 'graphql';


import ItemSubscriptions from '../modules/items/subscription';

export default new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    ...ItemSubscriptions
  }
});
