import { model, Schema } from 'mongoose';

const birthdaySchema = new Schema({
  firstName: String,
  lastName: String,
  day: String,
});

export default model('Birthday', birthdaySchema);
