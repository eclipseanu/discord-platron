const Command = require('../PlatronCommand');
const request = require('request-promise');

class GifCommand extends Command {
    constructor() {
        super('randomGif', {
            aliases: ['gif'],
            description: () => {
                return 'Posts a random gif from r/gifs';
            }
        });
    }

    async exec(message) {
        const thoughts = await request({
            method: 'GET',
            json: true,
            uri: 'https://www.reddit.com/r/gifs/top.json?limit=50&t=week'
        });

        const i = Math.floor(Math.random() * thoughts.data.children.length);
        await message.channel.send(thoughts.data.children[i].data.url);
    }
}

module.exports = GifCommand;
