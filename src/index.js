require('dotenv').config();

const { Client } = require('whatsapp-web.js');
const onQr = require('./events/onQr');
const onReady = require('./events/onReady');
const onMessage = require('./events/onMessage');

const client = new Client();

client.on('qr', onQr);
client.on('ready', onReady);
client.on('message', onMessage);

client.initialize();
