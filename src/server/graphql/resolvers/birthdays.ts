import { Birthday } from '../../models/Birthday';

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
    // async getBirthday(birthdayId: number) {
    //   try {
    //     const birthday = await Birthday.findById(birthdayId);
    //     if (birthday) {
    //       return birthday;
    //     }
    //     throw new Error('Birthday not found');
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },
  },
};
