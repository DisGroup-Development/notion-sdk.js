<div align="center">
    <p>
        <a href="https://notion.js.org"><img src="https://i.ibb.co/xh4kcQt/Notion-SDK-js.png" width="546" alt="notion-sdk.js" /></a>
    </p>
    <br/>
    <p>
        <a href="https://discord.gg/xRveKFVUuG"><img src="https://img.shields.io/discord/719506936810438667?color=5865F2&logo=discord&logoColor=white" alt="Discord-Server"/></a>
        <a href="https://npmjs.com/package/discord.js"><img src="https://img.shields.io/npm/dt/notion-sdk.js.svg?maxAge=3600" alt="NPM Downloads"/></a>    
        <a href="https://npmjs.com/package/notion-sdk.js"><img src="https://img.shields.io/npm/v/notion-sdk.js.svg?maxAge=3600" alt="NPM Version"/></a>
    </p>
</div>

---

## 📜 | About

A powerful 🔥 [NodeJS](https://nodejs.org) API Wrapper for the [Notion API](https://developers.notion.com/reference/intro).

- Class- & Object-oriented
- Performant

---

## 📂 | Installation

**NodeJS 16+ or newer is required***

```shell
npm install notion-sdk.js
```

---

## 🔨 | Setup
```javascript
const notion = require('notion-sdk.js');

const client = new notion.Client({ secret: process.env.NOTION_SECRET });

client.pages.get('45e76132bb5244c081ccd7bd32e2e102').then(async (Page) => {
   
    console.log(Page); // Returns page class
    
});
```

---

## 📄 | Documentation
The documentation can be found [here](https://notion.js.org) or https//notion.js.org.

---

## 🎧 | Support
[![Support](https://discordapp.com/api/guilds/719506936810438667/widget.png?style=banner2)](https://discord.gg/xRveKFVUuG)

---

*It is only tested with NodeJS LTS. It can also work in other NodeJS-Versions, but we only provide support for NodeJS LTS

---

<div align="right">
    Made with 💙 by DisGroup Development
</div>