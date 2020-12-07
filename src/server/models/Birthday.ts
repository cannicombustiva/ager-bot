import { createSchema, Type, typedModel } from 'ts-mongoose';

const birthdaySchema = createSchema({
  firstName: Type.string(),
  lastName: Type.string(),
  day: Type.string(),
});

export const Birthday = typedModel('Birthday', birthdaySchema);
