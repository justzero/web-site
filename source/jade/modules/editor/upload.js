// @fileOverview: /Users/ice/dev/testdev/source/js/upload.js
// Date: 2013- 2-20
// Time: 13:10
// @description: test for upload images
// @author: gongbing

/*jshint browser: true, nomen: true, indent: 4, maxlen: 80, strict: true, curly: true */
/*global define: true, $: true, _: true */

// DEBUG MODE
/*jshint devel: true */

// @description: 
(function (window, document, undefined) {
    'use strict';
    /*预览图片*/
    /*by 星空无畏*/
    function viewImage(imgObj, imgBoxId, width, height) {
        //检查文件格式
        if(!imgObj.value.match(/.jpg|.gif|.png|.bmp/i)){ 
            alert('图片格式无效！'); 
            return false; 
        }

        var imgBox = document.getElementById(imgBoxId);
        if (window.navigator.userAgent.indexOf("MSIE") > 0) {
            //IE内核浏览器
            viewImgForIE(imgObj, imgBox, width, height);
        } else {
            //其他内核浏览器使用html5预览
            viewImgForOther(imgObj, imgBox, width, height);
        }
    }

    function viewImgForIE(imgObj, imgBox, width, height) {
        if (navigator.appVersion.match(/6./i)=="6.") {
            //IE6.0 直接显示
            imgBox.innerHTML = "<img src=\"file:\\\\" + imgObj.value + "\" width=\"80 \" height=\"60\" /> " ;
        } else {
            //IE6.0以上版本 使用滤镜
            if (typeof width === 'undefined') {
                imgBox.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image)";
                imgBox.style.width = '100px'; //无效值，但若不赋值IE不显示，暂时没找到原因
                imgBox.style.height = '100px';
            } else {
                imgBox.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                imgBox.style.width = width;
                imgBox.style.height = height;
            }
            imgBox.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgObj.value;
        }
    }

    function viewImgForOther(imgObj, imgBox, width, height) {
        //其他内核浏览器使用HTML5进行预览
        if (typeof FileReader === 'undefined') {
            alert('Your browser does not support FileReader...');
            return;
        }

        var reader = new FileReader();
        reader.onload = function(e) {
            var imgHtml = '<img src="' + this.result + '"';
            if (typeof width != 'undefined') imgHtml += ' width="' + width + '" height="' + height + '"';
            imgHtml += '>';

            imgBox.innerHTML = imgHtml;
        }
        reader.readAsDataURL(imgObj.files[0]);
    }

    $(document).ready(function() {
        // bind event
        $('input.file').on('change', function () {
            var self = this;
            viewImage(self, 'showBox', '100px', '100px');
        });

        $('form').on('submit', function () {

        });
    });
}(window, document));
