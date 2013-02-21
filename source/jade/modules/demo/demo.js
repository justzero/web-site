// @fileOverview: /Users/ice/Sites/testdev/source/jade/modules/demo/demo.js
// Date: 2013- 2-21
// Time: 18:24
// @description: a demo js
// @author: gongbing

/*jshint browser: true, nomen: true, indent: 4, maxlen: 80, strict: true, curly: true */
/*global define: true, $: true, _: true */

// DEBUG MODE
/*jshint devel: true */

// @description: 
(function (window, document, undefined) {
    'use strict';


    var dead = [];

    var animal = function (n) {
        var name=n;
        return {
            name: name,
            kill: function () {
                dead.push(this.name);
            }
        }
    };

    var dog = animal ('scruffy');
    dog.kill();
    console.log(dead);

}(window, document));
