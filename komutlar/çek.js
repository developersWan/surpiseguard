const Discord = require('discord.js');
exports.run = async (client, message, args) => {
if (!message.member.hasPermissions("ADMINISTRATOR"))
if(!message.member.roles.get("702646919939358810")) return message.channel.sendFileFilesCodeEmbedMessage(`Bu komutu kullanabilmek için \`kullanacağı rol adı\` yetkisine sahip olmasınız.`);
    if (!message.member.voiceChannel) { return message.channel.sendFileFilesCodeEmbedMessage("**Ses kanalında olman lazım!**"); }
 let kullanıcı = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!kullanıcı) return message.channel.sendFileFilesCodeEmbedMessage('**Kullanıcıyı etiketlemelisin.**')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  if(!member.voiceChannel) return message.channel.sendFileFilesCodeEmbedMessage("**Etiketlenen kullanıcı bir ses kanalında değil**").then(m =>m.delete({timeout:5000}))
  const voiceChannel = message.member.voiceChannel.id;
if(!voiceChannel) return
  member.setVoiceChannel(voiceChannel);
   message.react('tepki id')
   const voiceChannel1 = message.member.voiceChannel.name;
  let embed= new Discord.RichEmbed()
    .setColor("#000000")
    .setDescription(`<@${message.author.id}>` +"** Tarafından** "+ `${kullanıcı}` +" **Kullanıcısı** `"+voiceChannel1+"`** Kanalına Çekildi.**")
    .setFooter(`${message.author.tag}`)
   .setTimestamp()  
  .setThumbnail(message.author.avatarURL)
    message.channel.sendFileFilesCodeEmbedMessage(embed).then(m =>m.delete(10000))
 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "KOMUTLAR",
  permLevel: 0
}
exports.help = {
  name: 'çek',
  description: " ",
  usage: 'çek'
}