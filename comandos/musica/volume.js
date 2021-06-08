module.exports = ({
    name: "volume",
    aliases: ['v'],
    code: `
    $author[volume foi para $message[1]%]
    $description[<@$authorID> mudou o volume para $message[1]%]
    $color[GREEN]
    $footer[aumentado por $userTag[$authorID];https://image.flaticon.com/icons/png/512/58/58495.png]
    $onlyIf[$voiceID!=;{title:Error!} {description:voce não esta conectado a nenhum canal de voz!} {color:FF0000}]
    $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:conecte na mesma call que o bot!} {field:Bot:<#$voiceID[$clientID]>}{color:FF0000}]
	$volume[$message[1]]
	$onlyIf[$message[1]<=150;voce so pode aumentar ate 150%.]
	$onlyIf[$isNumber[$message[1]]==true;ensira numeros de 1 a 150]

	`
    });
//mexa na linha 12 para alterar o maximo que podera se aumentado