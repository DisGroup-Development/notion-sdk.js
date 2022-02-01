const Auth = require('./auth.json');
const Notion = require('../src');

const client = new Notion.Client({ secret: Auth.Secret });

// Client client.users.get('8f2b344d-83e2-48ce-a5d5-559d0eb24f58').then(async (R) => { console.log(R)});
// User client.users.get('746fd236-0948-423a-b3b2-e20d31eadc31').then(async (R) => { console.log(R)});
// LIST client.users.list().then(async (R) => { console.log(R)});
// ME client.users.me().then(async (R) => { console.log(R)});

client.pages.get('c4e3935b04ec4df6a17a7b131511961d').then(async (R) => { console.log(R)});