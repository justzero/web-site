// @fileOverview: /Users/ice/dev/testdev/source/js/editor.js
// Date: 2013- 2-20
// Time: 17:15
// @description: test baidu editor
// @author: gongbing
/*jshint browser: true, nomen: true, indent: 4, maxlen: 80, strict: true, curly: true *//*global define: true, $: true, _: true */// DEBUG MODE
/*jshint devel: true */// @description: 
(function(e,t,n){"use strict";function i(e){if(!e)return;var t={src:e,data_ue_src:e,width:"50",height:"50",border:"0",floatStyle:"none",vspace:0,hspace:0,title:"111",style:"width: 50px; height: 50px;"};r.execCommand("insertImage",t)}function s(){var e=prompt("插入html代码","");r.execCommand("insertHtml",e)}function o(){b();UE.getEditor("editor")}function u(){alert(UE.getEditor("editor").getAllHtml())}function a(){var e=[];e.push("使用editor.getContent()方法可以获得编辑器的内容");e.push("内容为：");e.push(UE.getEditor("editor").getContent());alert(e.join("\n"))}function f(){var e=[];e.push("使用editor.getPlainTxt()方法可以获得编辑器的带格式的纯文本内容");e.push("内容为：");e.push(UE.getEditor("editor").getPlainTxt());alert(e.join("\n"))}function l(e){var t=[];t.push("使用editor.setContent('欢迎使用ueditor')方法可以设置编辑器的内容");UE.getEditor("editor").setContent("欢迎使用ueditor",e);alert(t.join("\n"))}function c(){UE.getEditor("editor").setDisabled("fullscreen");y("enable")}function h(){UE.getEditor("editor").setEnabled();b()}function p(){var e=UE.getEditor("editor").selection.getRange();e.select();var t=UE.getEditor("editor").selection.getText();alert(t)}function d(){var e=[];e.push("使用editor.getContentTxt()方法可以获得编辑器的纯文本内容");e.push("编辑器的纯文本内容为：");e.push(UE.getEditor("editor").getContentTxt());alert(e.join("\n"))}function v(){var e=[];e.push("使用editor.hasContents()方法判断编辑器里是否有内容");e.push("判断结果为：");e.push(UE.getEditor("editor").hasContents());alert(e.join("\n"))}function m(){UE.getEditor("editor").focus()}function g(){y();UE.getEditor("editor").destroy()}function y(e){var t=document.getElementById("btns"),n=domUtils.getElementsByTagName(t,"button");for(var r=0,i;i=n[r++];)i.id==e?domUtils.removeAttributes(i,["disabled"]):i.setAttribute("disabled","true")}function b(){var e=document.getElementById("btns"),t=domUtils.getElementsByTagName(e,"button");for(var n=0,r;r=t[n++];)domUtils.removeAttributes(r,["disabled"])}document.domain="iyoudao.net";var r=UE.getEditor("editor");e.callback=i;r.addListener("ready",function(){this.focus()})})(window,document);