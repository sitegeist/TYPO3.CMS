!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.registerHelper("wordChars","r",/[\w.]/),e.defineMode("r",function(t){function r(e){for(var t={},r=0;r<e.length;++r)t[e[r]]=!0;return t}var n=["NULL","NA","Inf","NaN","NA_integer_","NA_real_","NA_complex_","NA_character_"],i=["list","quote","bquote","eval","return","call","parse","deparse"],a=["if","else","repeat","while","function","for","in","next","break"];e.registerHelper("hintWords","r",n.concat(i,a));var o,c=r(n),l=r(i),f=r(a),u=r(["if","else","repeat","while","function","for"]),d=/[+\-*\/^<>=!&|~$:]/;function s(e,t){o=null;var r,n=e.next();if("#"==n)return e.skipToEnd(),"comment";if("0"==n&&e.eat("x"))return e.eatWhile(/[\da-f]/i),"number";if("."==n&&e.eat(/\d/))return e.match(/\d*(?:e[+\-]?\d+)?/),"number";if(/\d/.test(n))return e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number";if("'"==n||'"'==n)return t.tokenize=(r=n,function(e,t){if(e.eat("\\")){var n=e.next();return"x"==n?e.match(/^[a-f0-9]{2}/i):("u"==n||"U"==n)&&e.eat("{")&&e.skipTo("}")?e.next():"u"==n?e.match(/^[a-f0-9]{4}/i):"U"==n?e.match(/^[a-f0-9]{8}/i):/[0-7]/.test(n)&&e.match(/^[0-7]{1,2}/),"string-2"}for(var i;null!=(i=e.next());){if(i==r){t.tokenize=s;break}if("\\"==i){e.backUp(1);break}}return"string"}),"string";if("`"==n)return e.match(/[^`]+`/),"variable-3";if("."==n&&e.match(/.[.\d]+/))return"keyword";if(/[\w\.]/.test(n)&&"_"!=n){e.eatWhile(/[\w\.]/);var i=e.current();return c.propertyIsEnumerable(i)?"atom":f.propertyIsEnumerable(i)?(u.propertyIsEnumerable(i)&&!e.match(/\s*if(\s+|$)/,!1)&&(o="block"),"keyword"):l.propertyIsEnumerable(i)?"builtin":"variable"}return"%"==n?(e.skipTo("%")&&e.next(),"operator variable-2"):"<"==n&&e.eat("-")||"<"==n&&e.match("<-")||"-"==n&&e.match(/>>?/)?"operator arrow":"="==n&&t.ctx.argList?"arg-is":d.test(n)?"$"==n?"operator dollar":(e.eatWhile(d),"operator"):/[\(\){}\[\];]/.test(n)?(o=n,";"==n?"semi":null):null}function p(e,t,r){e.ctx={type:t,indent:e.indent,flags:0,column:r.column(),prev:e.ctx}}function m(e,t){var r=e.ctx;e.ctx={type:r.type,indent:r.indent,flags:r.flags|t,column:r.column,prev:r.prev}}function x(e){e.indent=e.ctx.indent,e.ctx=e.ctx.prev}return{startState:function(){return{tokenize:s,ctx:{type:"top",indent:-t.indentUnit,flags:2},indent:0,afterIdent:!1}},token:function(e,t){if(e.sol()&&(0==(3&t.ctx.flags)&&(t.ctx.flags|=2),4&t.ctx.flags&&x(t),t.indent=e.indentation()),e.eatSpace())return null;var r=t.tokenize(e,t);return"comment"!=r&&0==(2&t.ctx.flags)&&m(t,1),";"!=o&&"{"!=o&&"}"!=o||"block"!=t.ctx.type||x(t),"{"==o?p(t,"}",e):"("==o?(p(t,")",e),t.afterIdent&&(t.ctx.argList=!0)):"["==o?p(t,"]",e):"block"==o?p(t,"block",e):o==t.ctx.type?x(t):"block"==t.ctx.type&&"comment"!=r&&m(t,4),t.afterIdent="variable"==r||"keyword"==r,r},indent:function(e,r){if(e.tokenize!=s)return 0;var n=r&&r.charAt(0),i=e.ctx,a=n==i.type;return 4&i.flags&&(i=i.prev),"block"==i.type?i.indent+("{"==n?0:t.indentUnit):1&i.flags?i.column+(a?0:1):i.indent+(a?0:t.indentUnit)},lineComment:"#"}}),e.defineMIME("text/x-rsrc","r")});