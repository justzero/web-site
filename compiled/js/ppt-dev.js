// @fileOverview: /Users/ice/Sites/testdev/source/jade/modules/ppt/ppt.js
// Date: 2013- 2-27
// Time: 12:23
// @description: ppt js
// @author: gongbing
/*jshint browser: true, nomen: true, indent: 4, maxlen: 80, strict: true, curly: true *//*global define: true, $: true, _: true */// DEBUG MODE
/*jshint devel: true */// @description: 
(function(e, t) {
    "use strict";
    Reveal.initialize({
        controls: !0,
        progress: !0,
        history: !0,
        theme: Reveal.getQueryHash().theme,
        transition: Reveal.getQueryHash().transition || "default",
        dependencies: [ {
            src: "../js/ppt/highlight.js",
            async: !0,
            callback: function() {
                window.hljs.initHighlightingOnLoad();
            }
        }, {
            src: "../js/ppt/classList.js",
            condition: function() {
                return !document.body.classList;
            }
        }, {
            src: "../js/ppt/showdown.js",
            condition: function() {
                return !!document.querySelector("[data-markdown]");
            }
        }, {
            src: "../js/ppt/data-markdown.js",
            condition: function() {
                return !!document.querySelector("[data-markdown]");
            }
        }, {
            src: "../js/ppt/zoom.js",
            async: !0,
            condition: function() {
                return !!document.body.classList;
            }
        }, {
            src: "../js/ppt/notes.js",
            async: !0,
            condition: function() {
                return !!document.body.classList;
            }
        } ]
    });
})(window, document);