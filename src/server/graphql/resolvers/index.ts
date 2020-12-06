import birthdaysResolvers from './birthdays';

export const resolvers = {
  Query: {
    ...birthdaysResolvers.Query,
  },
};
