const commando  = require('discord.js-commando');
const Discord   = require("discord.js");
//const Cleverbot = require('cleverbot-node');
//const clbot     = new Cleverbot;

module.exports = class AskCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'log-ayarla',
            aliases: [],
            group: 'ayarlar',
            memberName: 'log-ayarla',
            description: 'Log kanalı ayarlamaya yarar.',
            guildOnly: true,
            throttling: {
                 usages: 2,
                 duration: 3
             },

            args: [
                {
                    key: 'msg',
                    prompt: 'Bana ne sormak istersin?',
                    type: 'string',
                    min: 1,
                    max: 1000,
                    default: ''
                }
            ]
        });
    }

    async run(msg, args) {
        const soru = args.msg;
        if (soru === "yapimcin kim" || soru === "yapimcin kim?" || soru === "yapımcın kim" || soru === "yapımcın kim?") {
            msg.channel.startTyping();
              setTimeout(() => {
                   msg.channel.send('🗨 **Yapay zeka:** Yapımcım: A Black Monday / Serhan#7171');
                   msg.channel.stopTyping();
              }, Math.random() * (1 - 3) + 1 * 1000);
              return;
        }
  		return msg.channel.send(' Komut kısa süreliğine devre dışıdır.');
  		Cleverbot.prepare(() => {
  		  clbot.write(soru, (response) => {
  			msg.channel.startTyping();
  			setTimeout(() => {
  			  msg.channel.send('🗨 **Yapay zeka:** ' + response.msg).catch(console.error);
  			  msg.channel.stopTyping();
  			}, Math.random() * (1 - 3) + 1 * 1000);
  		  });
  		});
	};
};
