/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

export const CONFIG = {
  TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN ?? '',
  MONGODB: process.env.MONGODB ?? '',
};
