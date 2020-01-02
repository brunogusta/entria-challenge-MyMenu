/**
 * @flow
 * @relayHash f86ee6cd3ada23788343a8379b8aaa7e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddNewItemMutationVariables = {|
  title: string,
  cost: string,
  details: string,
  file: any,
|};
export type AddNewItemMutationResponse = {|
  +AddNewItemMutation: ?{|
    +item: {|
      +_id: string,
      +title: string,
      +cost: string,
      +details: string,
      +fileName: string,
    |}
  |}
|};
export type AddNewItemMutation = {|
  variables: AddNewItemMutationVariables,
  response: AddNewItemMutationResponse,
|};
*/


/*
mutation AddNewItemMutation(
  $title: String!
  $cost: String!
  $details: String!
  $file: Upload!
) {
  AddNewItemMutation(input: {title: $title, cost: $cost, details: $details, file: $file}) {
    item {
      _id
      title
      cost
      details
      fileName
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "title",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cost",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "details",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "file",
    "type": "Upload!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "AddNewItemMutation",
    "storageKey": null,
    "args": [
      {
        "kind": "ObjectValue",
        "name": "input",
        "fields": [
          {
            "kind": "Variable",
            "name": "cost",
            "variableName": "cost"
          },
          {
            "kind": "Variable",
            "name": "details",
            "variableName": "details"
          },
          {
            "kind": "Variable",
            "name": "file",
            "variableName": "file"
          },
          {
            "kind": "Variable",
            "name": "title",
            "variableName": "title"
          }
        ]
      }
    ],
    "concreteType": "AddNewItemPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "item",
        "storageKey": null,
        "args": null,
        "concreteType": "ItemType",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "_id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cost",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "details",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "fileName",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddNewItemMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddNewItemMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddNewItemMutation",
    "id": null,
    "text": "mutation AddNewItemMutation(\n  $title: String!\n  $cost: String!\n  $details: String!\n  $file: Upload!\n) {\n  AddNewItemMutation(input: {title: $title, cost: $cost, details: $details, file: $file}) {\n    item {\n      _id\n      title\n      cost\n      details\n      fileName\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2604724d11166b2b8b75ddd4db18f44a';
module.exports = node;
