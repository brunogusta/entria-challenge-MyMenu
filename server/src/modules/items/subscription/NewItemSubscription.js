import ItemType from '../ItemType';
import pubSub, { EVENTS } from '~/pubSub';


const NewItemSubscription = {
  type: ItemType,
  subscribe: () => pubSub.asyncIterator(EVENTS.NEW_ITEM.ADD)
};

export default NewItemSubscription;
