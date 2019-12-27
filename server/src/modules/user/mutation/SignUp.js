import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import bcrypt from 'bcryptjs';

import UserModel from '../UserModel';

import { generateToken } from '~/utils/auth';

import UserType from '../UserType';


export default mutationWithClientMutationId({
  name: 'SignUpUserMutation',
  inputFields: {
    emailInput: {
      type: new GraphQLNonNull(GraphQLString)
    },
    passwordInput: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  mutateAndGetPayload: async ({ emailInput, passwordInput }) => {
    let user = await UserModel.findOne({ email: emailInput.toLowerCase() });

    if (user) throw new Error('The entered email already exists.');

    const newPass = bcrypt.hashSync(passwordInput, bcrypt.genSaltSync());

    user = new UserModel({
      email: emailInput,
      password: newPass
    });

    await user.save();

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
