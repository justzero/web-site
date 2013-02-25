// @fileOverview: userMedia/userMedia.js
// Date: 2013- 2-25
// Time: 15:46
// @description: demo for getUserMedia
// @author: gongbing

/*jshint browser: true, nomen: true, indent: 4, maxlen: 80, strict: true, curly: true */
/*global define: true, $: true, _: true */

// DEBUG MODE
/*jshint devel: true */

// @description: userMedia1 javascript
//      -- 获取摄像头数据，并在video标签播放
(function (window, document, undefined) {
    'use strict';

    // cache DOM
    var $video = $('#video');

    // 兼容性处理
    navigator.getUserMedia_ = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

    // @method: succ
    // @description: 成功获取摄像头的数据流
    //      -- 将数据流转换成url
    //      -- 替换掉video的src，使video展示摄像头数据
    // @param: {摄像头采集到的数据流}
    // @return: null
    var succ = function (stream) {
        var domURL = window.URL || window.webkitURL;
        $video[0].src = domURL ? domURL.createObjectURL(stream) : stream;
    };

    // @method: err
    // @description: 异常错误时执行此函数
    //      -- 拒绝访问
    //      -- 无法识别摄像头
    //      -- 浏览器版本过低，不支持getUserMedia方法
    // @param: errorMsg
    // @return: null
    var err = function (e) {
        console.log(e);
    };

    //  调用浏览器Media Capture API
    try {
        navigator.getUserMedia_({
            video: true,
            audio: false
        }, succ, err);
    }
    catch (e) {
        try {
        navigator.getUserMedia_('video', succ, err);
        }
        catch (e) {
            err(e);
        }
    }

}(window, document));

// @description: 
(function (win, doc, undefined) {
    'use strict';

    var ctx;
    var $video = $('#video');
    var cw, ch;

    // @method: drawCanvas
    // @description: 
    // @param: 
    // @return: 
    var drawCanvas = function () {
        cw = $video.width();
        ch = $video.height();
        var canvas = doc.createElement('canvas');
        canvas.id = "canvas";
        canvas.width = cw;
        canvas.height = ch;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, cw, ch);
        $('body').append(canvas);
        return ctx;
    };

    // @method: getVideoImage
    // @description: 
    // @param: 
    // @return: 
    var getVideoImage = function (ctx) {
        ctx.drawImage($('#video')[0], 0, 0, cw, ch);
    };

    $('#btn').on('click', function (e) {
        if (!ctx) {
            ctx = drawCanvas();
        }
        getVideoImage(ctx);
    });

}(window, document));
