(function(e){function s(e,t){if(t<=0){return/[]/.source}else{return e.replace(/<SELF>/g,function(){return s(e,t-1)})}}var t=/'[{}:=,](?:[^']|'')*'(?!')/;var r={pattern:/''/,greedy:true,alias:"operator"};var n={pattern:t,greedy:true,inside:{escape:r}};var a=s(/\{(?:[^{}']|'(?![{},'])|''|<STR>|<SELF>)*\}/.source.replace(/<STR>/g,function(){return t.source}),8);var i={pattern:RegExp(a),inside:{message:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:true,inside:null},"message-delimiter":{pattern:/./,alias:"punctuation"}}};e.languages["icu-message-format"]={argument:{pattern:RegExp(a),greedy:true,inside:{content:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:true,inside:{"argument-name":{pattern:/^(\s*)[^{}:=,\s]+/,lookbehind:true},"choice-style":{pattern:/^(\s*,\s*choice\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:true,inside:{punctuation:/\|/,range:{pattern:/^(\s*)[+-]?(?:\d+(?:\.\d*)?|\u221e)\s*[<#\u2264]/,lookbehind:true,inside:{operator:/[<#\u2264]/,number:/\S+/}},rest:null}},"plural-style":{pattern:/^(\s*,\s*(?:plural|selectordinal)\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:true,inside:{offset:/^offset:\s*\d+/,"nested-message":i,selector:{pattern:/=\d+|[^{}:=,\s]+/,inside:{keyword:/^(?:few|many|one|other|two|zero)$/}}}},"select-style":{pattern:/^(\s*,\s*select\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:true,inside:{"nested-message":i,selector:{pattern:/[^{}:=,\s]+/,inside:{keyword:/^other$/}}}},keyword:/\b(?:choice|plural|select|selectordinal)\b/,"arg-type":{pattern:/\b(?:date|duration|number|ordinal|spellout|time)\b/,alias:"keyword"},"arg-skeleton":{pattern:/(,\s*)::[^{}:=,\s]+/,lookbehind:true},"arg-style":{pattern:/(,\s*)(?:currency|full|integer|long|medium|percent|short)(?=\s*$)/,lookbehind:true},"arg-style-text":{pattern:RegExp(/(^\s*,\s*(?=\S))/.source+s(/(?:[^{}']|'[^']*'|\{(?:<SELF>)?\})+/.source,8)+"$"),lookbehind:true,alias:"string"},punctuation:/,/}},"argument-delimiter":{pattern:/./,alias:"operator"}}},escape:r,string:n};i.inside.message.inside=e.languages["icu-message-format"];e.languages["icu-message-format"].argument.inside.content.inside["choice-style"].inside.rest=e.languages["icu-message-format"]})(Prism);