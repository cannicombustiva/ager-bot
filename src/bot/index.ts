import * as TelegramBot from 'node-telegram-bot-api';
import { CONFIG } from '../config';

const token = CONFIG.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

type CommandsTypes = 'list' | 'saveBirthday' | 'fix'
const keyboardCommands: Record<CommandsTypes, TelegramBot.KeyboardButton> = {
  list: {
    text: 'Gimme list',
  },
  saveBirthday: {
    text: 'Save a birthday',
  },
  fix: {
    text: 'Make a fix',
  },
};

const start = (msg: TelegramBot.Message) => {
  bot.sendMessage(msg.chat.id, 'Welcome, what can I do for you?', {
    reply_markup: {
      keyboard: [[keyboardCommands.list, keyboardCommands.saveBirthday], [keyboardCommands.fix]],
    },
  });
};

const main = () => {
  bot.onText(/\/start/, start);
};

main();
