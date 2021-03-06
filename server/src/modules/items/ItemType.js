import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';


const ItemType = new GraphQLObjectType({
  name: 'Item',
  description: 'Item data',
  fields: () => ({
    _id: {
      type: GraphQLID,
      resolve: (item) => item.id
    },
    title: {
      type: GraphQLString,
      resolve: (item) => item.title
    },
    cost: {
      type: GraphQLString,
      resolve: (item) => item.cost
    },
    details: {
      type: GraphQLString,
      resolve: (item) => item.details
    },
    fileName: {
      type: GraphQLString,
      resolve: (item) => item.fileName
    }
  })
});


export default ItemType;
