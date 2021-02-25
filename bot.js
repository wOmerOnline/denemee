const { Client, Collection } = require("discord.js");
const client = global.client = new Client({ fetchAllMembers: true });
const config = require("./config.json");
const mongoose = require("mongoose")
const fs = require("fs");

client.commands = new Collection();
client.aliases = new Collection();

fs.readdirSync("./commands").filter(file => file.endsWith(".js")).forEach(file => {
    let command = require(`./commands/${file}`);
    client.commands.set(command.conf.command, command);
    console.log(`[Command] ${file.replace(".js", "")} command loaded.`);
    command.conf.aliases.forEach(aliases => {
    client.aliases.set(aliases, command)  
    });
});

fs.readdirSync("./events").filter(file => file.endsWith(".js")).forEach(file => {
    let event = require(`./events/${file}`);
    client.on(event.conf.event, event.execute);
    console.log(`[Event] ${file.replace(".js", "")} event loaded.`);
});

mongoose.connect(`mongodb+srv://eternalkayit:<password>@eternal.06ezb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true}).then(c => console.log(`Bot başarıyla MongoDBye bağlandı! Eternal Community`)).catch(err => console.error(`Bot mongodbye bağlanamadı bir hata var!`));
client.login(config.Token).then(c => console.log(`${client.user.tag} isimli bota bağlanıldı, artık hazırım!`)).catch(err => console.error(`Bota bağlanılamadı, bir hata mevcut!`));
