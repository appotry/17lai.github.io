Prism.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:Prism.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},Prism.hooks.add("after-tokenize",function(t){if("graphql"===t.language)for(var o=t.tokens.filter(function(t){return"string"!=typeof t&&"comment"!==t.type&&"scalar"!==t.type}),s=0;s<o.length;){var n=o[s++];if("keyword"===n.type&&"mutation"===n.content){var e=[];if(f(["definition-mutation","punctuation"])&&"("===l(1).content){s+=2;var a=c(/^\($/,/^\)$/);if(-1===a)continue;for(;s<a;s++){var r=l(0);"variable"===r.type&&(b(r,"variable-input"),e.push(r.content))}s=a+1}if(f(["punctuation","property-query"])&&"{"===l(0).content&&(s++,b(l(0),"property-mutation"),0<e.length)){var i=c(/^\{$/,/^\}$/);if(-1!==i)for(var u=s;u<i;u++){var p=o[u];"variable"===p.type&&0<=e.indexOf(p.content)&&b(p,"variable-input")}}}}function l(t){return o[s+t]}function f(t,n){n=n||0;for(var e=0;e<t.length;e++){var a=l(e+n);if(!a||a.type!==t[e])return}return 1}function c(t,n){for(var e=1,a=s;a<o.length;a++){var r=o[a],i=r.content;if("punctuation"===r.type&&"string"==typeof i)if(t.test(i))e++;else if(n.test(i)&&0===--e)return a}return-1}function b(t,n){var e=t.alias;e?Array.isArray(e)||(t.alias=e=[e]):t.alias=e=[],e.push(n)}});