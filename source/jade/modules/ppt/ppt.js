// @fileOverview: /Users/ice/Sites/testdev/source/jade/modules/ppt/ppt.js
// Date: 2013- 2-27
// Time: 12:23
// @description: ppt js
// @author: gongbing

/*jshint browser: true, nomen: true, indent: 4, maxlen: 80, strict: true, curly: true */
/*global define: true, $: true, _: true */

// DEBUG MODE
/*jshint devel: true */

// @description: 
(function (win, doc) {
    'use strict';
    // Full list of configuration options available here:
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,

        theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
        transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/none

        // Optional libraries used to extend on reveal.js
        dependencies: [
            { src: '../js/ppt/highlight.js', async: true, callback: function() { window.hljs.initHighlightingOnLoad(); } },
            { src: '../js/ppt/classList.js', condition: function() { return !document.body.classList; } },
            { src: '../js/ppt/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: '../js/ppt/data-markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: '../js/ppt/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
            { src: '../js/ppt/notes.js', async: true, condition: function() { return !!document.body.classList; } }
        ]
    });

}(window, document));
