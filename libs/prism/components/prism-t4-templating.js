(function(n){function i(e,t,a){return{pattern:RegExp("<#"+e+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+e+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:t,alias:a}}}}function e(e){var t=n.languages[e];var a="language-"+e;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:i("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:i("=",t,a),"class-feature":i("\\+",t,a),standard:i("",t,a)}}}}n.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:e})})(Prism);