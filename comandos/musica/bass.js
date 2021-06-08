module.exports = ({ 
name: "bass",
code: `
$songFilter[bass:$message]
 $onlyIf[$message[1]<=71;filtro de audio maximo 70%.]
 $onlyIf[$isNumber[$message[1]]==true;apenas **numeros**]
 $argsCheck[1;quantos o bass sera aumentado]
 bass aumentado com sucesso para $message%
`
})