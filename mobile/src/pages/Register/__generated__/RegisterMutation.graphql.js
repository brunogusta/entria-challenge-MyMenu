/**
 * @flow
 * @relayHash 0ff1284814999f3517ddfbaa05ba1dc1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RegisterMutationVariables = {|
  email: string,
  password: string,
|};
export type RegisterMutationResponse = {|
  +RegisterMutation: ?{|
    +token: string
  |}
|};
export type RegisterMutation = {|
  variables: RegisterMutationVariables,
  response: RegisterMutationResponse,
|};
*/


/*
mutation RegisterMutation(
  $email: String!
  $password: String!
) {
  RegisterMutation(input: {email: $email, password: $password}) {
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "RegisterMutation",
    "storageKey": null,
    "args": [
      {
        "kind": "ObjectValue",
        "name": "input",
        "fields": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          },
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
          }
        ]
      }
    ],
    "concreteType": "UserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RegisterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RegisterMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RegisterMutation",
    "id": null,
    "text": "mutation RegisterMutation(\n  $email: String!\n  $password: String!\n) {\n  RegisterMutation(input: {email: $email, password: $password}) {\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6e3a2a8beae7798ac1cc5772ec7b7ac7';
module.exports = node;
