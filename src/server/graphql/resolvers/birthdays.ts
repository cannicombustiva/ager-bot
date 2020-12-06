import Birthday from '../../models/Birthday';

export default {
  Query: {
    async getBirthdays() {
      try {
        const birthdays = await Birthday.find();
        return birthdays;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
