const Discord = require("discord.js");
const mongoose = require("mongoose");
const client = global.client;
const Register = require("../models/Register.js");

exports.execute = async (member) => {
  
let Users = client.users.cache.get(member.id)

var Tarih = "";
if (moment(Users.createdAt).format("MM") === "01") {
var Tarih = `${moment(Users.createdAt).format("DD")} Ocak ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "02") {
var Tarih = `${moment(Users.createdAt).format("DD")} Şubat ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "03") {
var Tarih = `${moment(Users.createdAt).format("DD")} Mart ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "04") {
var Tarih = `${moment(Users.createdAt).format("DD")} Nisan ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "05") {
var Tarih = `${moment(Users.createdAt).format("DD")} Mayıs ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "06") {
var Tarih = `${moment(Users.createdAt).format("DD")} Haziran ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "07") {
var Tarih = `${moment(Users.createdAt).format("DD")} Temmuz ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "08") {
var Tarih = `${moment(Users.createdAt).format("DD")} Ağustos ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "09") {
var Tarih = `${moment(Users.createdAt).format("DD")} Eylül ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "10") {
var Tarih = `${moment(Users.createdAt).format("DD")} Ekim ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "11") {
var Tarih = `${moment(Users.createdAt).format("DD")} Kasım ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "12") {
var Tarih = `${moment(Users.createdAt).format("DD")} Aralık ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
}


    controlMember(member) 
  
    let control;
    if(Date.now() - member.user.createdAt.getTime() < 1000*60*60*24*7) control = "Güvensiz"
    else control = "Güvenli "
  
    client.channels.cache.get("814055944467906561").send(`**Hoşgeldin! ${member} Seninle \`${member.guild.memberCount}\` Kişiyiz.** \n **Müsait Olunca Teyit Odalarından Birine Geçip Kaydını Yaptırabilirsin.** \n <@&813454127266005012> **Seninle İlgilenecektir.** \n Hesabın Oluşturulma Tarihi: **__${Tarih}__** \n **__Bu Hesap ${control}__**`, new MessageAttachment(`gif_linki`))

};

exports.conf = {
  event: "guildMemberAdd"
};