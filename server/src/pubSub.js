import { PubSub } from 'graphql-yoga';

export const EVENTS = {
  NEW_ITEM: {
    ADD: 'ITEM_SENDED'
  }
};


export default new PubSub();
