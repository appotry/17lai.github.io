Prism.languages.yang={comment:/\/\*[\s\S]*?\*\/|\/\/.*/,string:{pattern:/"(?:[^\\"]|\\.)*"|'[^']*'/,greedy:true},keyword:{pattern:/(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,lookbehind:true},namespace:{pattern:/(\s)[a-z_][\w.-]*(?=:)/i,lookbehind:true},boolean:/\b(?:false|true)\b/,operator:/\+/,punctuation:/[{};:]/};