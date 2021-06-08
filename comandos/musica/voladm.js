module.exports = ({
  name: "voladm",
  code:`
  $volume[$message]
   $description[volume adiministrador aumentado para $message]
 $color[random]
 $footer[volume aumentado com sucesso;https://image.flaticon.com/icons/png/512/58/58495.png]
 $onlyIf[$message[1]<501;volume maximo de adm e 500.]
 $onlyPerms[admin; <@$authorID> \`voce nao tem permissao de adm\`]
`
})
