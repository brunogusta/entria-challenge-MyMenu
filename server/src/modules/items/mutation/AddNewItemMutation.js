import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { GraphQLUpload } from 'graphql-upload';
import fs, { createWriteStream } from 'fs';
import path from 'path';
import sharp from 'sharp';

import ItemType from '../ItemType';


export default mutationWithClientMutationId({
  name: 'AddNewItemMutation',
  inputFields: {
    file: {
      type: new GraphQLNonNull(GraphQLUpload)
    }
  },
  mutateAndGetPayload: async ({
    file
  }) => {
    const { createReadStream, filename } = await file;

    const [name] = filename.split('.');
    const fileName = `${name}_${(Math.random() * 100).toFixed(2)}.png`;

    await new Promise((res) => createReadStream()
      .pipe(
        createWriteStream(
          path.join(__dirname, '../../../uploads', fileName)
        )
      )
      .on('close', res));


    await sharp(path.resolve(__dirname, '../../../uploads', fileName))
      .resize(500)
      .jpeg({ quality: 100 })
      .toFile(path.resolve(__dirname, '../../../uploads', 'resized', fileName));

    fs.unlinkSync(path.resolve(__dirname, '../../../uploads', fileName));


    return {
      log: 'enviado'
    };
  },
  outputFields: {
    data: {
      type: GraphQLString,
      resolve: (item) => item
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error
    }
  }
});
