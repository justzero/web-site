// @fileOverview: /Users/ice/dev/testdev/source/js/1.js
// Date: 2013- 2-18
// Time: 17:42
// @description: this is a test
// @author: gongbing
/*jshint browser: true, nomen: true, indent: 4, maxlen: 80, strict: true, curly: true *//*global define: true, $: true, _: true */// DEBUG MODE
/*jshint devel: true */// @description: 
(function(e,t,n){"use strict";var r=[],i=function(e){var t=e;return{name:t,kill:function(){r.push(this.name)}}},s=i("scruffy");s.kill();console.log(r)})(window,document);