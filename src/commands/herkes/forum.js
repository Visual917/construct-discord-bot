const { Command } = require('discord.js-commando');
//const path = require('path');
const scirra = require('../../construct.js');
class forum extends Command
{
	constructor(client)
	{
		super(client,{
            name: 'forum',
            group: 'herkes',
            memberName: 'forum',
            description: 'forumdaki online üyeleri görürsün',
            examples: ['forum'],
		})
	}
    
    /*hasPermission(msg) {
        //if(!msg.guild) return this.client.isOwner(msg.author);
        if(msg.channel.id == "609017383029309443")
            return true;
        //return msg.member.hasPermission('ADMINISTRATOR') || this.client.isOwner(msg.author);
    }*/

    run(msg) {
        return scirra.komut_forum(msg);
        //return msg.say('Hi, I\'m awake!');
    }
}


module.exports = forum;