module.exports = ({ 
name: "help",
aliases: ['ajuda'],
code: `
$title[precisa de ajuda?]
 $addField[adm;
 $getservervar[prefix]voladm (numero ate 500)
 $getservervar[prefix]setprefixo (argumento)
 ;yes]
 $addField[livre;
 $getservervar[prefix]play (nome da musica ou link)
 $getservervar[prefix]bass (numero ate 70)
 $getservervar[prefix]info
 $getservervar[prefix]queue
 $getservervar[prefix]skip
 $getservervar[prefix]stop
 $getservervar[prefix]volume (numero ate 150)
 ;yes]
 $image[https://i.imgur.com/4M7IWwP.gif]
 $footer[musica 24 horas]
 $color[RANDOM]
`
})