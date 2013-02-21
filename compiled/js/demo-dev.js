// @fileOverview: /Users/ice/Sites/testdev/source/jade/modules/demo/demo.js
// Date: 2013- 2-21
// Time: 18:24
// @description: a demo js
// @author: gongbing
/*jshint browser: true, nomen: true, indent: 4, maxlen: 80, strict: true, curly: true *//*global define: true, $: true, _: true */// DEBUG MODE
/*jshint devel: true */// @description: 
(function(e, t, n) {
    "use strict";
    var r = [], i = function(e) {
        var t = e;
        return {
            name: t,
            kill: function() {
                r.push(this.name);
            }
        };
    }, s = i("scruffy");
    s.kill();
    console.log(r);
})(window, document);