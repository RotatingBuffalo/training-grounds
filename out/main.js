"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loganlines_json_1 = __importDefault(require("./loganlines.json"));
const config_json_1 = __importDefault(require("./config.json"));
//importing the Client Interface from discord.js
const discord_js_1 = require("discord.js");
//creating a client, duh
const client = new discord_js_1.Client();
//when the client is ready, run this code!
//will only run one time, immediately after logging in.
client.once('ready', () => {
    console.log("ready!");
});
//checking messages for commands
client.on('message', message => {
    //get real
    if (message.content === config_json_1.default.prefix.concat('help')) {
        message.channel.send("get real.");
    }
    //loganlines
    if (message.content === config_json_1.default.prefix.concat('loganlines')) {
        message.channel.send(loganlines_json_1.default.lines[Math.floor(Math.random() * loganlines_json_1.default.lines.length)]);
    }
});
//login to discord.
client.login(config_json_1.default.token);
