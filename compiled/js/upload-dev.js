// @fileOverview: /Users/ice/dev/testdev/source/js/upload.js
// Date: 2013- 2-20
// Time: 13:10
// @description: test for upload images
// @author: gongbing
/*jshint browser: true, nomen: true, indent: 4, maxlen: 80, strict: true, curly: true *//*global define: true, $: true, _: true */// DEBUG MODE
/*jshint devel: true */// @description: 
(function(e,t,n){"use strict";function r(n,r,o,u){if(!n.value.match(/.jpg|.gif|.png|.bmp/i)){alert("图片格式无效！");return!1}var a=t.getElementById(r);e.navigator.userAgent.indexOf("MSIE")>0?i(n,a,o,u):s(n,a,o,u)}function i(e,t,n,r){if(navigator.appVersion.match(/6./i)=="6.")t.innerHTML='<img src="file:\\\\'+e.value+'" width="80 " height="60" /> ';else{if(typeof n=="undefined"){t.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image)";t.style.width="100px";t.style.height="100px"}else{t.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";t.style.width=n;t.style.height=r}t.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src=e.value}}function s(e,t,n,r){if(typeof FileReader=="undefined"){alert("Your browser does not support FileReader...");return}var i=new FileReader;i.onload=function(e){var i='<img src="'+this.result+'"';typeof n!="undefined"&&(i+=' width="'+n+'" height="'+r+'"');i+=">";t.innerHTML=i};i.readAsDataURL(e.files[0])}$(t).ready(function(){$("input.file").on("change",function(){var e=this;r(e,"showBox","100px","100px")});$("form").on("submit",function(){})})})(window,document);