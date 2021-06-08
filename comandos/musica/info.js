module.exports = ({ 
 name: "info",
  code: `
$description[
tocando 
$songInfo[title]
musica pedida por 
<@!$songInfo[userID]>
falta
$songInfo[duration_left] para acabar
]
$image[$songInfo[thumbnail]]
$color[RANDOM]
`
})