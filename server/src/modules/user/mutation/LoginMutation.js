import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import bcrypt from 'bcryptjs';

import UserModel from '../UserModel';


import { generateToken } from '~/utils/auth';


export default mutationWithClientMutationId({
  name: 'LoginMutation',
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  mutateAndGetPayload: async ({ email, password }) => {
    const user = await UserModel.findOne({ email });
    if (!user) throw new Error('The email you entered does not exist.');

    const userPass = await UserModel.findOne({ email }).select('password');

    if (!bcrypt.compareSync(password, userPass.password)) {
      throw new Error('Invalid Password');
    }

    const userInfo = generateToken(user);
    return userInfo;
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error
    }
  }
});
