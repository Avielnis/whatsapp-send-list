const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const fs = require('fs');

console.log("Loading image.jpeg")
const img = fs.readFileSync('./image.jpeg', { encoding: 'base64' });
const client = new Client({
    puppeteer: { headless: false },
    authStrategy: new LocalAuth(),
});

console.log('Initializing...');

client.initialize();

client.on('qr', () => {
    console.log('Please scan the QR code on the browser.');
});

// Read the file synchronously
const rawData = fs.readFileSync('phones.txt', 'utf-8');


console.log('Reading phone numbers from phones.txt')
let phones = rawData.split('\n').filter(line => line.trim() !== '');

phones = phones.map((phone) => {
    return '972' + phone.substring(1, phone.length - 1) + '@c.us';
});

console.log("Reading message from message.txt")
const message = fs.readFileSync('message.txt','utf-8');



client.on('ready', async () => {
    const media = new MessageMedia('image/jpeg', img, 'wedding.jpeg');
    const sendMessagesPromises = phones.map(async (phone) => {
        await delay(random(3000, 7000));
        console.log('Sending to ' + phone);
        const msg = await client.sendMessage(phone, message, {
            media,
        });
        console.log('Sent');
        return msg;
    });

    try {
        // Wait for all messages to be sent
        await Promise.all(sendMessagesPromises);
        console.log('All messages sent. Exiting...');
        // process.exit(0);
    } catch (error) {
        console.error('Error sending messages:', error);
        process.exit(1);
    }
});

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
