 module.exports = ({ 
 name: "play",
  aliases: ['p'],
  code: `
  $description[$message foi adicionado a lista verifique a posição 
 1- $songInfo[title]
-------------------------------------
  2- $queue[2;1;{title} ]
-------------------------------------
  3- $queue[3;1;{title} ]
-------------------------------------
  4- $queue[4;1;{title} ]
-------------------------------------
  5- $queue[5;1;{title} ]
-------------------------------------
  6- $queue[6;1;{title} ]
-------------------------------------
  7- $queue[7;1;{title} ]
-------------------------------------
  8- $queue[8;1;{title} ]
-------------------------------------
  9- $queue[9;1;{title} ]
-------------------------------------
10- $queue[10;1;{title} ]
-------------------------------------
  ]
  $footer[em 20segundos esta mensagem sera apagada]
$color[RANDOM]
$deleteIn[20s]
$textSplit[$playSong[$message]]
$onlyIf[$voiceID!=;o seu cabeça de nois tudo como voce quer que eu toque musica se voçe não esta em call.]
 $onlyIf[$charcount[$message]<100;insira titulos de apenas 100 caracteres obrigado.]
`
})