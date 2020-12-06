import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  username: String,
  chatId: Number,
  is_bot: Boolean,
});

module.exports = model('User', userSchema);
