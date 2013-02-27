// @method: run
// @description: 
// @param: 
// @return: 
var run = function() {
    function e() {
        if (canvas.width != video.videoWidth) {
            width = Math.floor(video.videoWidth / compression);
            height = Math.floor(video.videoHeight / compression);
            canvas.width = ccanvas.width = width;
            canvas.height = ccanvas.height = height;
        }
        _.drawImage(video, width, 0, -width, height);
        draw = _.getImageData(0, 0, width, height);
        t();
    }
    function t() {
        delt = _.createImageData(width, height);
        if (last !== !1) {
            var e = 0, t = 0, n = 0, i = delt.width * delt.height, s = 0, o = i * 4;
            while (o -= 4) {
                var u = Math.abs(draw.data[o] - last.data[o]) + Math.abs(draw.data[o + 1] - last.data[o + 1]) + Math.abs(draw.data[o + 2] - last.data[o + 2]);
                if (u > thresh) {
                    delt.data[o] = 160;
                    delt.data[o + 1] = 255;
                    delt.data[o + 2] = delt.data[o + 3] = 255;
                    n += 1;
                    e += o / 4 % width;
                    t += Math.floor(o / 4 / delt.height);
                } else {
                    delt.data[o] = delt.data[o + 1] = delt.data[o + 2] = 0;
                    delt.data[o + 3] = 0;
                }
            }
        }
        if (n) {
            down = {
                x: e / n,
                y: t / n,
                d: n
            };
            r();
        }
        last = draw;
        c_.putImageData(delt, 0, 0);
    }
    function n() {
        wasdown = {
            x: down.x,
            y: down.y,
            d: down.d
        };
    }
    function r() {
        avg = .9 * avg + .1 * down.d;
        var e = down.d - avg, t = e > brightthresh;
        switch (state) {
          case 0:
            if (t) {
                state = 1;
                n();
            }
            break;
          case 2:
            t || (state = 0);
            break;
          case 1:
            var r = down.x - wasdown.x, i = down.y - wasdown.y, s = Math.abs(i) < Math.abs(r);
            r < -movethresh && s ? Reveal.navigateRight() : r > movethresh && s && Reveal.navigateLeft();
            i > movethresh && !s ? e > overthresh ? Reveal.toggleOverview() : Reveal.navigateUp() : i < -movethresh && !s && (e > overthresh ? Reveal.toggleOverview() : Reveal.navigateDown());
            state = 2;
        }
    }
    video = document.getElementById("video");
    canvas = document.getElementById("canvas");
    _ = canvas.getContext("2d");
    ccanvas = document.getElementById("comp");
    c_ = ccanvas.getContext("2d");
    navigator.webkitGetUserMedia({
        audio: !0,
        video: !0
    }, function(t) {
        s = t;
        video.src = window.webkitURL.createObjectURL(t);
        video.addEventListener("play", function() {
            setInterval(e, 40);
        });
    }, function() {
        console.log("OOOOOOOH! DEEEEENIED!");
    });
    compression = 5;
    width = height = 0;
    last = !1;
    thresh = 150;
    down = !1;
    wasdown = !1;
    movethresh = 2;
    brightthresh = 300;
    overthresh = 1e3;
    avg = 0;
    state = 0;
};

$("#btn").on("click", run);