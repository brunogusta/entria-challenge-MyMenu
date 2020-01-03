/**
 * @flow
 * @relayHash 4f0d43c244ad6b7259981683c1c7c49e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MenuSubscriptionVariables = {||};
export type MenuSubscriptionResponse = {|
  +newItemSubscription: ?{|
    +item: {|
      +_id: string,
      +title: string,
      +cost: string,
      +fileName: string,
      +details: string,
    |}
  |}
|};
export type MenuSubscription = {|
  variables: MenuSubscriptionVariables,
  response: MenuSubscriptionResponse,
|};
*/


/*
subscription MenuSubscription {
  newItemSubscription {
    item {
      _id
      title
      cost
      fileName
      details
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "newItemSubscription",
    "storageKey": null,
    "args": null,
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
    "text": "subscription MenuSubscription {\n  newItemSubscription {\n    item {\n      _id\n      title\n      cost\n      fileName\n      details\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4181232ae988d0b3f3ecd5dbb33fa50d';
module.exports = node;
