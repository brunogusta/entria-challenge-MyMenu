/**
 * @flow
 * @relayHash f60d231077b49e4042d869f40ad68ca4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MenuSubscriptionVariables = {||};
export type MenuSubscriptionResponse = {|
  +NewItemSubscription: ?{|
    +_id: string,
    +title: string,
    +cost: string,
    +fileName: string,
    +details: string,
  |}
|};
export type MenuSubscription = {|
  variables: MenuSubscriptionVariables,
  response: MenuSubscriptionResponse,
|};
*/


/*
subscription MenuSubscription {
  NewItemSubscription {
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
    "kind": "LinkedField",
    "alias": null,
    "name": "NewItemSubscription",
    "storageKey": null,
    "args": null,
    "concreteType": "ItemsPayload",
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
    "name": "MenuSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MenuSubscription",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "MenuSubscription",
    "id": null,
    "text": "subscription MenuSubscription {\n  NewItemSubscription {\n    _id\n    title\n    cost\n    fileName\n    details\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c182eb42f275ccf873e596318cd3aff3';
module.exports = node;
