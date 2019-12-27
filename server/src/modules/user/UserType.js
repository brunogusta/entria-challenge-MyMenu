import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User data',
  fields: () => ({
    _id: {
      type: GraphQLID,
      resolve: (user) => user.id
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user.email
    },
    token: {
      type: GraphQLString,
      resolve: (user) => user.token
    }
  })
});


export default UserType;
