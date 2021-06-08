const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send(`<center><p class="nome">music bot 🟢online</p><br><img src="https://cdn.discordapp.com/icons/816316117701885962/278233ccafd8b231de4c221783c27c6a.png?size=2048"style="border-radius: 50%;max-height: 100px;border-width: medium;
border-style: solid;
border-color: #F00;border-top-color: #54ff00;border-right-color: #54ff00;
}"></center>
  <style>
  .online {
    color: #54ff00;
    max-height: 50px;
  }
.nome {
    color: #fff;
    max-height: 50px;
  }
body {
    background: url(https://cdn.discordapp.com/attachments/810690445641383936/836942493756817408/background.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
  </style>`)
})
app.listen(3000)

const Aoijs = require('aoi.js');
const config = require('./config.json');
const bot = new Aoijs.Bot({
	sharding: false,
	shardAmount: 2,
	token: config.token,
	prefix: ['$getServerVar[prefix]', 'b1']
});

//canal warn

bot.onMessage({
	guildOnly: true
});


const fs = require('fs');

const folders = fs.readdirSync('./comandos/');

for (const files of folders) {
	const folder = fs
		.readdirSync(`./comandos/${files}/`)
		.filter(file => file.endsWith('.js'));

	for (const commands of folder) {
		const command = require(`./comandos/${files}/${commands}`);
		bot.command({
			name: command.name,
			aliases: command.aliases,
			code: command.code
		});
  }
}






// variaveis
bot.variables({
			prefix: '!!',
      id: ''
})

    bot.command({
	name: '<@!820441070412365825>',//id do seu bot!!!
	code: `$title[meu nome e $username[$clientID]]
$description[meu prefixo e \`$getServerVar[prefix]\`
o meu criador e o <@!$botOwnerID>]
$footer[$getServerVar[prefix]help para ver minha lista de comandos]
$color[RANDOM]
	`,
	nonPrefixed: true
});

bot.readyCommand({
  channel: "824266947054927924",
    code: `
$log[]
$log[criado por appmakerparana]
    `
})

bot.status({
  text: "use $getvar[prefix]help",
  type: "PLAYING",
  time: 5
})
//eventos
bot.musicStartCommand({
	channel: '$channelID',
	code: `
 $author[tocando agora;https://cdn.discordapp.com/attachments/812081910532538419/812082048432341052/cd.gif]
$color[RANDOM]
$thumbnail[$songInfo[thumbnail]]
$addField[Duração;\`$songInfo[duration]\`;yes]
$addField[infos;[link da musica]($songInfo[url])
**artista**
[$songInfo[publisher]]($songInfo[publisher_url]);yes]
$addField[titulo;\`$songInfo[title]\`;yes]
`
});

bot.musicEndCommand({
	channel: '$channelID',
	code: `
  $description[musica acabou]
  $footer[saindo da call;https://cdn.discordapp.com/attachments/812081910532538419/812082048432341052/cd.gif]
  $color[RANDOM]
  `
})

bot.command({
	name: 'setprefixo',
	code: `$setServerVar[prefix;$message] $description[o novo prefixo do server e  \`$message\`]
  $onlyPerms[admin; <@$authorID> \`verificamos que voce não tem permissao de adm\`]
  $argsCheck[1;informe um argumento valido]
  `
});
