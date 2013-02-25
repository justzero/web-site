// @fileOverview: userMedia/userMedia.js
// Date: 2013- 2-25
// Time: 15:46
// @description: demo for getUserMedia
// @author: gongbing
/*jshint browser: true, nomen: true, indent: 4, maxlen: 80, strict: true, curly: true *//*global define: true, $: true, _: true */// DEBUG MODE
/*jshint devel: true */// @description: userMedia1 javascript
//      -- 获取摄像头数据，并在video标签播放
(function(e, t, n) {
    "use strict";
    var r = $("#video");
    navigator.getUserMedia_ = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    var i = function(t) {
        var n = e.URL || e.webkitURL;
        r[0].src = n ? n.createObjectURL(t) : t;
    }, s = function(e) {
        console.log(e);
    };
    try {
        navigator.getUserMedia_({
            video: !0,
            audio: !1
        }, i, s);
    } catch (o) {
        try {
            navigator.getUserMedia_("video", i, s);
        } catch (o) {
            s(o);
        }
    }
})(window, document);

(function(e, t, n) {
    "use strict";
    var r, i = $("#video"), s, o, u = function() {
        s = i.width();
        o = i.height();
        var e = t.createElement("canvas");
        e.id = "canvas";
        e.width = s;
        e.height = o;
        var n = e.getContext("2d");
        n.fillStyle = "#ffffff";
        n.fillRect(0, 0, s, o);
        $("body").append(e);
        return n;
    }, a = function(e) {
        e.drawImage($("#video")[0], 0, 0, s, o);
    };
    $("#btn").on("click", function(e) {
        r || (r = u());
        a(r);
    });
})(window, document);