module.exports = ({
    name: "stop",
    code: `
    $author[musica pausada]
    $stopSong
    $description[<@$authorID> parou a musica!]
    $color[GREEN]
    $footer[Requested by $userTag[$authorID];https://cdn3.iconfinder.com/data/icons/music-player-controls/100/music_pause_stop_control_play-512.png]
    $onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:FF0000}]
    $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:conecte na mesma call que o bot! } {field:Bot:<#$voiceID[$clientID]>} {color:FF0000}]`
    });