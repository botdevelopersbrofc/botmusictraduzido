module.exports = ({
    name: "skip",
	aliases: ['s'],
    code: `
    $author[Music Skipped]
    $skipSong
    $description[<@$authorID> deu skip na musica!
	musica pulada: $songInfo[title]
    faltava: $songInfo[duration_left]para acabar]
    $color[RANDOM]
    $footer[pulada por $userTag[$authorID]]
    $onlyIf[$voiceID!=;{title:Error!} {description:Você precisa se conectar a um canal de voz!} {color:RED}]
    $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {você precisa estar na mesma call que o bot!} {field:Bot's VC:<#$voiceID[$clientID]>} {field:User VC:<#$voiceID>} {color:FF0000}]`
    });