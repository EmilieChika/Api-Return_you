require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
console.log(accountSid)
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages.create({
    body: 'Hello, Vous-avez une demande de rendez-vous le ',
    from: '+12098178148',
    to: '+33695273882'
    })
    .then((message) => console.log(message))
    .catch((err) => console.log(err));