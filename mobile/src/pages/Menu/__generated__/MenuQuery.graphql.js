/**
 * @flow
 * @relayHash 757655f0e9d57960a0613421aeee1c18
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MenuQueryVariables = {|
  limit?: ?number
|};
export type MenuQueryResponse = {|
  +items: ?$ReadOnlyArray<?{|
    +_id: string,
    +title: string,
    +cost: string,
    +fileName: string,
    +details: string,
  |}>
|};
export type MenuQuery = {|
  variables: MenuQueryVariables,
  response: MenuQueryResponse,
|};
*/


/*
query MenuQuery(
  $limit: Int
) {
  items(limit: $limit) {
    _id
    title
    cost
    fileName
    details
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "limit",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "items",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "limit",
        "variableName": "limit"
      }
    ],
    "concreteType": "ItemsPayload",
    "plural": true,
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
        "name": "fileName",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "details",
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
    "name": "MenuQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MenuQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "MenuQuery",
    "id": null,
    "text": "query MenuQuery(\n  $limit: Int\n) {\n  items(limit: $limit) {\n    _id\n    title\n    cost\n    fileName\n    details\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6c08e4ba231d112521a4f39ac3886d76';
module.exports = node;
