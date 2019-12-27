import { GraphQLList, GraphQLInt } from 'graphql';

import ItemType from './ItemType';
import ItemModel from './ItemModel';

export default {
  items: {
    type: GraphQLList(ItemType),
    description: 'Take all items in database',
    args: {
      limit: {
        name: 'limit',
        type: GraphQLInt
      }
    },
    resolve: async (_, { limit = null }) => ItemModel.find().limit(limit)
  }
};
