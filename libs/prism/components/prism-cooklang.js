(function(e){var r=/(?:(?!\s)[\d$+<=a-zA-Z\x80-\uFFFF])+/.source;var t=/[^{}@#]+/.source;var a=/\{[^}#@]*\}/.source;var n=t+a;var o=/(?:h|hours|hrs|m|min|minutes)/.source;var i={pattern:/\{[^{}]*\}/,inside:{amount:{pattern:/([\{|])[^{}|*%]+/,lookbehind:true,alias:"number"},unit:{pattern:/(%)[^}]+/,lookbehind:true,alias:"symbol"},"servings-scaler":{pattern:/\*/,alias:"operator"},"servings-alternative-separator":{pattern:/\|/,alias:"operator"},"unit-separator":{pattern:/(?:%|(\*)%)/,lookbehind:true,alias:"operator"},punctuation:/[{}]/}};e.languages.cooklang={comment:{pattern:/\[-[\s\S]*?-\]|--.*/,greedy:true},meta:{pattern:/>>.*:.*/,inside:{property:{pattern:/(>>\s*)[^\s:](?:[^:]*[^\s:])?/,lookbehind:true}}},"cookware-group":{pattern:new RegExp("#(?:"+n+"|"+r+")"),inside:{cookware:{pattern:new RegExp("(^#)(?:"+t+")"),lookbehind:true,alias:"variable"},"cookware-keyword":{pattern:/^#/,alias:"keyword"},"quantity-group":{pattern:new RegExp(/\{[^{}@#]*\}/),inside:{quantity:{pattern:new RegExp(/(^\{)/.source+t),lookbehind:true,alias:"number"},punctuation:/[{}]/}}}},"ingredient-group":{pattern:new RegExp("@(?:"+n+"|"+r+")"),inside:{ingredient:{pattern:new RegExp("(^@)(?:"+t+")"),lookbehind:true,alias:"variable"},"ingredient-keyword":{pattern:/^@/,alias:"keyword"},"amount-group":i}},"timer-group":{pattern:/~(?!\s)[^@#~{}]*\{[^{}]*\}/,inside:{timer:{pattern:/(^~)[^{]+/,lookbehind:true,alias:"variable"},"duration-group":{pattern:/\{[^{}]*\}/,inside:{punctuation:/[{}]/,unit:{pattern:new RegExp(/(%\s*)/.source+o+/\b/.source),lookbehind:true,alias:"symbol"},operator:/%/,duration:{pattern:/\d+/,alias:"number"}}},"timer-keyword":{pattern:/^~/,alias:"keyword"}}}}})(Prism);