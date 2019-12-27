import { applyMiddlewareRule } from '../utils/middleware';
import Mutation from '~/types/MutationType';

/* The middleware will not be applied to the resolvers of this array */
const exceptions = ['SignIn', 'SignUp'];

/* The middleware handle function ( Rule ) */
const handle = async (resolve, parent, args, context) => {

};

export default {
  /*
   * Auth: is a Middleware function above
   * Resolvers.Query: my query object with all resolvers
   * exceptions: array of resolvers exceptions (name of resolvers that
   * middleware will not be applied)
   */
  Mutation: applyMiddlewareRule(handle, Mutation, exceptions) // No exceptions
};
