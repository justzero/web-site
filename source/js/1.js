// @fileOverview: /Users/ice/dev/testdev/source/js/1.js
// Date: 2013- 2-18
// Time: 17:42
// @description: this is a test
// @author: gongbing

/*jshint browser: true, nomen: true, indent: 4, maxlen: 80, strict: true, curly: true */
/*global define: true, $: true, _: true */

// DEBUG MODE
/*jshint devel: true */

// @description: 
(function (window, document, undefined) {
    'use strict';

    document.domain = 'iyoudao.net';

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
