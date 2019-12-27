import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import bcrypt from 'bcryptjs';

import UserModel from '../UserModel';

import UserType from '../UserType';

import { generateToken } from '~/utils/auth';


export default mutationWithClientMutationId({
  name: 'SignInUserMutation',
  inputFields: {
    emailInput: {
      type: new GraphQLNonNull(GraphQLString)
    },
    passwordInput: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  mutateAndGetPayload: async ({ emailInput, passwordInput }) => {
    const user = await UserModel.findOne({ email: emailInput });
    if (!user) throw new Error('The email you entered does not exist.');

    const { password } = await UserModel.findOne({ email: emailInput }).select('password');

    if (!bcrypt.compareSync(passwordInput, password)) {
      throw new Error('Invalid Password');
    }

    const userInfo = generateToken(user);
    return userInfo;
  },
  outputFields: {
    userInfo: {
      type: UserType,
      resolve: (userInfo) => userInfo
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error
    }
  }
});
