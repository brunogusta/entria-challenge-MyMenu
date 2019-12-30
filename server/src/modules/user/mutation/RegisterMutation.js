import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import bcrypt from 'bcryptjs';

import UserModel from '../UserModel';

import { generateToken } from '~/utils/auth';


export default mutationWithClientMutationId({
  name: 'RegisterMutation',
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  mutateAndGetPayload: async ({ email, password }) => {
    let user = await UserModel.findOne({ email: email.toLowerCase() });

    if (user) throw new Error('The entered email already exists.');

    const newPass = bcrypt.hashSync(password, bcrypt.genSaltSync());

    user = new UserModel({
      email,
      password: newPass
    });

    await user.save();

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
