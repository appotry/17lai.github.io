(function(e){var r=/%%?[~:\w]+%?|!\S+!/;var t={pattern:/\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,alias:"attr-name",inside:{punctuation:/:/}};var n=/"(?:[\\"]"|[^"])*"(?!")/;var a=/(?:\b|-)\d+\b/;e.languages.batch={comment:[/^::.*/m,{pattern:/((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:true}],label:{pattern:/^:.*/m,alias:"property"},command:[{pattern:/((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im,lookbehind:true,inside:{keyword:/\b(?:do|in)\b|^for\b/i,string:n,parameter:t,variable:r,number:a,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|geq|gtr|leq|lss|neq) )(?:"[^"]*"|[^\s"]\S*))/im,lookbehind:true,inside:{keyword:/\b(?:cmdextversion|defined|errorlevel|exist|not)\b|^if\b/i,string:n,parameter:t,variable:r,number:a,operator:/\^|==|\b(?:equ|geq|gtr|leq|lss|neq)\b/i}},{pattern:/((?:^|[&()])[ \t]*)else\b/im,lookbehind:true,inside:{keyword:/^else\b/i}},{pattern:/((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:true,inside:{keyword:/^set\b/i,string:n,parameter:t,variable:[r,/\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],number:a,operator:/[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/m,lookbehind:true,inside:{keyword:/^\w+\b/,string:n,parameter:t,label:{pattern:/(^\s*):\S+/m,lookbehind:true,alias:"property"},variable:r,number:a,operator:/\^/}}],operator:/[&@]/,punctuation:/[()']/}})(Prism);