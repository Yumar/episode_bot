'use strict';

var TelegramBot = require('node-telegram-bot-api');


//telegram bot
var token = '239421563:AAFmMyYsF4W7ltmgx_4T8b1T4mJaEJJ709o';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  
  bot.sendMessage(chatId, "muy pronto este bot funcionara bien! :D");
});
