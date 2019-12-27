import {
  GraphQLObjectType, GraphQLFloat, GraphQLNonNull, GraphQLString
} from 'graphql';


export default new GraphQLObjectType({
  name: 'Query',
  description: 'Root of querys',
  fields: () => ({
    me: {
      type: GraphQLString,
      description: 'Return nafem',
      resolve: (root, args, context) => 'test'
    }
  })
});
