import loganlines from "./loganlines.json"
import config from "./config.json"
//importing the Client Interface from discord.js
import {Client} from "discord.js"
//creating a client, duh
const client = new Client();

//when the client is ready, run this code!
//will only run one time, immediately after logging in.
client.once('ready', () => {
    console.log("ready!");
})
//checking messages for commands
client.on('message', message => {
    //get real
    if(message.content === config.prefix.concat('help'))
    {
        message.channel.send("get real.");
    }
    //loganlines
    if(message.content === config.prefix.concat('loganlines'))
    {
        message.channel.send(loganlines.lines[Math.floor(Math.random() * loganlines.lines.length)]);
    }
});



//login to discord.
client.login(config.token)