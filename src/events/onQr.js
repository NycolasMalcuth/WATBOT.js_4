//Lida com a geração e exibição do QR code para autenticação.
const qrcode = require('qrcode-terminal');

function onQr(qr) {
    qrcode.generate(qr, {small: true});
    console.log('QR Code generated. Scan it with your WhatsApp.');
}

module.exports = onQr;
