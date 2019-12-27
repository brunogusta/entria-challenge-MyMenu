import mongoose from 'mongoose';

const { Schema } = mongoose;

const ItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    cost: {
      type: String,
      required: true
    },
    details: {
      type: String,
      required: true
    },
    file: {
      type: String,
      required: true
    }
  }
);


export default mongoose.model('Item', ItemSchema);
