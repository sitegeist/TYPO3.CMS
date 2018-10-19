!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("./matchesonscrollbar")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./matchesonscrollbar"],t):t(CodeMirror)}(function(t){"use strict";var e={style:"matchhighlight",minChars:2,delay:100,wordsOnly:!1,annotateScrollbar:!1,showToken:!1,trim:!0};function o(t){var e=t.state.matchHighlighter;(e.active||t.hasFocus())&&n(t,e)}function i(t){var e=t.state.matchHighlighter;e.active||(e.active=!0,n(t,e))}function n(t,e){clearTimeout(e.timeout),e.timeout=setTimeout(function(){s(t)},e.options.delay)}function r(t,e,o,i){var n,r,a,s=t.state.matchHighlighter;if(t.addOverlay(s.overlay=(n=e,r=o,a=i,{token:function(t){if(t.match(n)&&(!r||(o=r,!((e=t).start&&o.test(e.string.charAt(e.start-1))||e.pos!=e.string.length&&o.test(e.string.charAt(e.pos))))))return a;var e,o;t.next(),t.skipTo(n.charAt(0))||t.skipToEnd()}})),s.options.annotateScrollbar&&t.showMatchesOnScrollbar){var l=o?new RegExp("\\b"+e.replace(/[\\\[.+*?(){|^$]/g,"\\$&")+"\\b"):e;s.matchesonscroll=t.showMatchesOnScrollbar(l,!1,{className:"CodeMirror-selection-highlight-scrollbar"})}}function a(t){var e=t.state.matchHighlighter;e.overlay&&(t.removeOverlay(e.overlay),e.overlay=null,e.matchesonscroll&&(e.matchesonscroll.clear(),e.matchesonscroll=null))}function s(t){t.operation(function(){var e=t.state.matchHighlighter;if(a(t),t.somethingSelected()||!e.options.showToken){var o=t.getCursor("from"),i=t.getCursor("to");if(o.line==i.line&&(!e.options.wordsOnly||function(t,e,o){{if(null!==t.getRange(e,o).match(/^\w+$/)){if(e.ch>0){var i={line:e.line,ch:e.ch-1},n=t.getRange(i,e);if(null===n.match(/\W/))return!1}if(o.ch<t.getLine(e.line).length){var i={line:o.line,ch:o.ch+1},n=t.getRange(o,i);if(null===n.match(/\W/))return!1}return!0}return!1}}(t,o,i))){var n=t.getRange(o,i);e.options.trim&&(n=n.replace(/^\s+|\s+$/g,"")),n.length>=e.options.minChars&&r(t,n,!1,e.options.style)}}else{for(var s=!0===e.options.showToken?/[\w$]/:e.options.showToken,l=t.getCursor(),c=t.getLine(l.line),h=l.ch,u=h;h&&s.test(c.charAt(h-1));)--h;for(;u<c.length&&s.test(c.charAt(u));)++u;h<u&&r(t,c.slice(h,u),s,e.options.style)}})}t.defineOption("highlightSelectionMatches",!1,function(n,r,l){if(l&&l!=t.Init&&(a(n),clearTimeout(n.state.matchHighlighter.timeout),n.state.matchHighlighter=null,n.off("cursorActivity",o),n.off("focus",i)),r){var c=n.state.matchHighlighter=new function(t){for(var o in this.options={},e)this.options[o]=(t&&t.hasOwnProperty(o)?t:e)[o];this.overlay=this.timeout=null,this.matchesonscroll=null,this.active=!1}(r);n.hasFocus()?(c.active=!0,s(n)):n.on("focus",i),n.on("cursorActivity",o)}})});