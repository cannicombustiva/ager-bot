import { createSchema, Type, typedModel } from 'ts-mongoose';

const userSchema = createSchema({
  username: Type.string(),
  chatId: Type.number({ required: true }),
  is_bot: Type.boolean,
});

export const User = typedModel('User', userSchema);
