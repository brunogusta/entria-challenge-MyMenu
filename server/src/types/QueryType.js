import {
  GraphQLObjectType
} from 'graphql';


import ItemQuery from '../modules/items/ItemQuery';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'Root of querys',
  fields: () => ({
    ...ItemQuery
  })
});
