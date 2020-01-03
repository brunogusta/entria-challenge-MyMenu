import {
  GraphQLObjectType
} from 'graphql';


import MenuQuery from '../modules/items/MenuQuery';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'Root of querys',
  fields: () => ({
    ...MenuQuery
  })
});
