import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { GraphQLUpload } from 'graphql-upload';
import fs, { createWriteStream } from 'fs';
import path from 'path';
import sharp from 'sharp';
import pubSub, { EVENTS } from '~/pubSub';

import ItemType from '../ItemType';
import ItemModel from '../ItemModel';


export default mutationWithClientMutationId({
  name: 'AddNewItemMutation',
  inputFields: {
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    cost: {
      type: new GraphQLNonNull(GraphQLString)
    },
    details: {
      type: new GraphQLNonNull(GraphQLString)
    },
    file: {
      type: new GraphQLNonNull(GraphQLUpload)
    }
  },
  mutateAndGetPayload: async ({
    title, cost, details, file
  }) => {
    const { createReadStream, filename: fileName } = await file;


    const item = await ItemModel.create({
      title,
      cost,
      details,
      fileName
    });

    console.log(item);
    await new Promise((res) => createReadStream()
      .pipe(
        createWriteStream(
          path.join(__dirname, '../../../uploads', fileName)
        )
      ).on('close', res));


    await sharp(path.resolve(__dirname, '../../../uploads', fileName))
      .resize(500)
      .jpeg({ quality: 100 })
      .toFile(path.resolve(__dirname, '../../../uploads', 'resized', fileName));

    fs.unlinkSync(path.resolve(__dirname, '../../../uploads', fileName));


    await pubSub.publish(EVENTS.NEW_ITEM.ADD, { item });

    return item;
  },
  outputFields: {
    item: {
      type: ItemType,
      resolve: (item) => item
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error
    }
  }
});
