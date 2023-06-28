import { Schema, model } from 'mongoose';

const resultSchema = new Schema({
  // Define your schema fields here
  result: {
    type: String,
    required: true,
  }
});

const ResultModel = model('results', resultSchema);

export default ResultModel;
