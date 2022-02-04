const Auth = require('./auth.json');
const Notion = require('../src');

const client = new Notion.Client({ secret: Auth.Secret });

// Client client.users.get('8f2b344d-83e2-48ce-a5d5-559d0eb24f58').then(async (R) => { console.log(R)});
// User client.users.get('746fd236-0948-423a-b3b2-e20d31eadc31').then(async (R) => { console.log(R)});
// LIST client.users.list().then(async (R) => { console.log(R)});
// ME client.users.me().then(async (R) => { console.log(R)});

// https://www.notion.so/finnley-hauptmann/Notion-SDK-JS-45e76132bb5244c081ccd7bd32e2e102

//client.rest.request("get", Notion.Endpoints.PAGE('45e76132bb5244c081ccd7bd32e2e102')).then(async (R) => console.log(await R.json()))

client.databases.get('a7737ff3570a47a6ac279895b8dc60ea').then(async (R) => console.log(R));