(function(n){n.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:true,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/};n.hooks.add("before-tokenize",function(a){var e=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;n.languages["markup-templating"].buildPlaceholders(a,"handlebars",e)});n.hooks.add("after-tokenize",function(a){n.languages["markup-templating"].tokenizePlaceholders(a,"handlebars")});n.languages.hbs=n.languages.handlebars;n.languages.mustache=n.languages.handlebars})(Prism);