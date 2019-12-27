import { GraphQLObjectType } from 'graphql';

import UserMutations from '~/modules/user/mutation';
import ItemMutations from '~/modules/items/mutation';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...UserMutations,
    ...ItemMutations
  })
});
