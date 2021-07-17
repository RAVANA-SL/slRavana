/* Copyright (C) 2020 TOXIC DEVIL

REEDITE BY RAVANA-SL

Licensed under the  GPL-3.0 License;
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "``හායි යාලුවනේ😀! මම දැන් online මේක පුද්ගලික් බොට් සේවාවක්. ♠```\n\n*Version:* ```v3.0 - Stable```\n\n*Developer:* ```RAVANA```\n\n*WhatsApp :* wa.me/94714898434\n\n*Youtube channel :* https://www.youtube.com/channel/UC4WaTaXOPPFP3V6sDBogJug\n\n```RAVANA v3.0 භාවිතා කිරීම ගැන ස්තූතියි.```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*සැකසුම © 2021 | RAVANA_SL*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```හායි යාලුවනේ😃!මම දැන් online ඔයාලට මගේ සේවාව ලබාගත හැක. ✨```\n\n*Version:* ```v3.0 - Stable```\n\n*Developer:* ```RAVANA```\n\n*WhatsApp :* wa.me/94714898434\n\n*Youtube channel :* https://www.youtube.com/channel/UC4WaTaXOPPFP3V6sDBogJug\n\n```ස්තූතියි RAVANA v3.0 බොට්ව පාවිච්චි කිරීම පිළිබදව```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*සැකසුම © 2021  | RAVANA_SL*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
