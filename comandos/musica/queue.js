module.exports = ({ 
 name: "queue",
  aliases: ['q'],
  code: `

$if[!=$queue[9;1;{title}]]
  $addField[#9;$queue[9;1;{title}];yes]
  $else
  $endif
  $if[!=$queue[8;1;{title}]]
  $addField[#8;$queue[8;1;{title}];yes]
  $else
  $endif
  $if[!=$queue[7;1;{title}]]
  $addField[#7;$queue[7;1;{title}];yes]
  $else
  $endif
  $if[!=$queue[6;1;{title}]]
  $addField[#6;$queue[6;1;{title}];yes]
  $else
  $endif
  $if[!=$queue[5;1;{title}]]
  $addField[#5;$queue[5;1;{title}];yes]
  $else
  $endif
  $if[!=$queue[4;1;{title}]]
  $addField[#4;$queue[4;1;{title}];yes]
  $else
  $endif
  $if[!=$queue[3;1;{title}]]
  $addField[#3;$queue[3;1;{title}];yes]
  $else
  $endif
  $if[!=$queue[2;1;{title}]]
  $addField[#2;$queue[2;1;{title}];yes]
  $else
  $endif
  $addField[#1;$songInfo[title];yes]

$title[lista de musicas]

`
})