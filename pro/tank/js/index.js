/**
 * Created by Dennis on 2016/8/19.
 */

// 首先要获得画布( 工具 )
var cas = document.getElementById('cas');
// 调用方法获得 绘图工具
var ctx = cas.getContext('2d');
//血条
var live = document.getElementById('line');
var live2 = document.getElementById('line2');
//当前血量
var max = 250, max2 = 250;
var img = new Image();
var img2 = new Image();
//角色皮肤
var iconArr = ['imgs/DMMban.png', 'imgs/TANK-M1.png', 'imgs/士兵.png', 'imgs/TANK-G14D.png'];
var icon = function (dom, id) {
    dom.src = id;
}
icon(img, iconArr[1]);
icon(img2, iconArr[3]);

img.onload = function () {
    var width = img.width / 4;
    var height = img.height / 4;
    var i = 0, j = 0, a = 0, b = 0;
    var i2 = 0, j2 = 0, a2 = 0, b2 = 0;
    var x = 0, y = parseInt(100 + Math.random() * 300);
    var x2 = cas.width - width, y2 = parseInt(100 + Math.random() * 300);
//步数，间隔时间
    var step = 8, int = 30, int2 = 8;


    ctx.drawImage(img, width * (a++ % 4), 2 * height, width, height, x, y, width, height);
    ctx.drawImage(img2, width * (j++ % 4), height, width, height, x2, y2, width, height);


//1P子弹
    function bulletR(x, y, x2, y2) {
        var q = x + width + 5, w = y + height / 2;
        var timer = setInterval(function () {
            ctx.clearRect(q - 8, w - 3, 10, 6);
            ctx.beginPath();
            ctx.lineCap = 'round';
            ctx.lineWidth = 4;
            ctx.moveTo(q, w);
            ctx.lineTo(q += 5, w);
            ctx.stroke();
            if (q >= cas.width + 8) {
                clearInterval(timer);
            }
            if (x2 <= q && q <= (x2 + width) && y2 <= w && w <= (y2 + height)) {
                live.style.width = (max -= 10) + 'px';
                clearInterval(timer);
                ctx.clearRect(q - 8, w - 3, 10, 6);
                if (max <= 0) {
                    location.reload();
                    alert('玩家1 WIN');
                }
            }
        }, int2);
    }

    function bulletL(x, y, x2, y2) {
        var q = x - 5, w = y + height / 2;
        var timer = setInterval(function () {
            ctx.clearRect(q, w - 3, 10, 6);
            ctx.beginPath();
            ctx.lineCap = 'round';
            ctx.lineWidth = 4;
            ctx.moveTo(q, w);
            ctx.lineTo(q -= 5, w);
            ctx.stroke();
            if (q <= -8) {
                clearInterval(timer);
            }
            if (x2 <= q && q <= (x2 + width) && y2 <= w && w <= (y2 + height)) {
                live.style.width = (max -= 10) + 'px';
                clearInterval(timer);
                ctx.clearRect(q, w - 3, 10, 6);
                if (max <= 0) {
                    location.reload();
                    alert(str);
                }
            }
        }, int2);
    }

    function bulletU(x, y, x2, y2) {
        var q = x + width / 2, w = y + 5;
        var timer = setInterval(function () {
            ctx.clearRect(q - 3, w, 6, 10);
            ctx.beginPath();
            ctx.lineCap = 'round';
            ctx.lineWidth = 4;
            ctx.moveTo(q, w);
            ctx.lineTo(q, w -= 5);
            ctx.stroke();
            if (w <= -8) {
                clearInterval(timer);
            }
            if (x2 <= q && q <= (x2 + width) && y2 <= w && w <= (y2 + height)) {
                live.style.width = (max -= 10) + 'px';
                clearInterval(timer);
                ctx.clearRect(q - 3, w, 6, 10);
                if (max <= 0) {
                    location.reload();
                    alert(str);
                }
            }
        }, int2);
    }

    function bulletD(x, y, x2, y2) {
        var q = x + width / 2, w = y + height + 5;
        var timer = setInterval(function () {
            ctx.clearRect(q - 3, w - 8, 6, 10);
            ctx.beginPath();
            ctx.lineCap = 'round';
            ctx.lineWidth = 4;
            ctx.moveTo(q, w);
            ctx.lineTo(q, w += 5);
            ctx.stroke();
            if (w >= cas.height + 8) {
                clearInterval(timer);
            }
            if (x2 <= q && q <= (x2 + width) && y2 <= w && w <= (y2 + height)) {
                live.style.width = (max -= 10) + 'px';
                clearInterval(timer);
                ctx.clearRect(q - 3, w - 8, 6, 10);
                if (max <= 0) {
                    location.reload();
                    alert(str);
                }
            }
        }, int2);
    }

//2P
    function p2BulletR(x, y, x2, y2) {
        var q = x + width + 5, w = y + height / 2;
        var timer = setInterval(function () {
            ctx.clearRect(q - 8, w - 3, 10, 6);
            ctx.beginPath();
            ctx.lineCap = 'round';
            ctx.lineWidth = 4;
            ctx.moveTo(q, w);
            ctx.lineTo(q += 5, w);
            ctx.stroke();
            if (q >= cas.width + 8) {
                clearInterval(timer);
            }
            if (x2 <= q && q <= (x2 + width) && y2 <= w && w <= (y2 + height)) {
                live2.style.width = (max2 -= 10) + 'px';
                clearInterval(timer);
                ctx.clearRect(q - 8, w - 3, 10, 6);
                if (max2 <= 0) {
                    location.reload();
                    alert('玩家2 WIN');
                }
            }
        }, int2);
    }

    function p2BulletL(x, y, x2, y2) {
        var q = x - 5, w = y + height / 2;
        var timer = setInterval(function () {
            ctx.clearRect(q, w - 3, 10, 6);
            ctx.beginPath();
            ctx.lineCap = 'round';
            ctx.lineWidth = 4;
            ctx.moveTo(q, w);
            ctx.lineTo(q -= 5, w);
            ctx.stroke();
            if (q <= -8) {
                clearInterval(timer);
            }
            if (x2 <= q && q <= (x2 + width) && y2 <= w && w <= (y2 + height)) {
                live2.style.width = (max2 -= 10) + 'px';
                clearInterval(timer);
                ctx.clearRect(q, w - 3, 10, 6);
                if (max2 <= 0) {
                    location.reload();
                    alert('玩家2 WIN');
                }
            }
        }, int2);
    }

    function p2BulletU(x, y, x2, y2) {
        var q = x + width / 2, w = y + 5;
        var timer = setInterval(function () {
            ctx.clearRect(q - 3, w, 6, 10);
            ctx.beginPath();
            ctx.lineCap = 'round';
            ctx.lineWidth = 4;
            ctx.moveTo(q, w);
            ctx.lineTo(q, w -= 5);
            ctx.stroke();
            if (w <= -8) {
                clearInterval(timer);
            }
            if (x2 <= q && q <= (x2 + width) && y2 <= w && w <= (y2 + height)) {
                live2.style.width = (max2 -= 10) + 'px';
                clearInterval(timer);
                ctx.clearRect(q - 3, w, 6, 10);
                if (max2 <= 0) {
                    location.reload();
                    alert('玩家2 WIN');
                }
            }
        }, int2);
    }

    function p2BulletD(x, y, x2, y2) {
        var q = x + width / 2, w = y + height + 5;
        var timer = setInterval(function () {
            ctx.clearRect(q - 3, w - 8, 6, 10);
            ctx.beginPath();
            ctx.lineCap = 'round';
            ctx.lineWidth = 4;
            ctx.moveTo(q, w);
            ctx.lineTo(q, w += 5);
            ctx.stroke();
            if (w >= cas.height + 8) {
                clearInterval(timer);
            }
            if (x2 <= q && q <= (x2 + width) && y2 <= w && w <= (y2 + height)) {
                live2.style.width = (max2 -= 10) + 'px';
                clearInterval(timer);
                ctx.clearRect(q - 3, w - 8, 6, 10);
                if (max2 <= 0) {
                    location.reload();
                    alert('玩家2 WIN');
                }
            }
        }, int2);
    }

    var timer, timer2;
//角色方向
    var tUp = false, tDown = false, tLeft = false, tRight = true;
    var pUp = false, pDown = false, pLeft = false, pRight = true;
//2P攻击
    window.onclick = function () {
        if (pRight) {
            p2BulletR(x2, y2, x, y);
        } else if (pLeft) {
            p2BulletL(x2, y2, x, y);
        } else if (pDown) {
            p2BulletD(x2, y2, x, y);
        } else if (pUp) {
            p2BulletU(x2, y2, x, y);
        }
    }

    window.onkeyup = function (e) {
        //console.log(e);
        //1P攻击
        if (e.code == 'KeyG') {
            if (tRight) {
                bulletR(x, y, x2, y2);
            } else if (tLeft) {
                bulletL(x, y, x2, y2);
            } else if (tDown) {
                bulletD(x, y, x2, y2);
            } else if (tUp) {
                bulletU(x, y, x2, y2);
            }
        };

        if (e.code == 'Space') {
            clearInterval(timer);
            clearInterval(timer2);
        }
        //上下左右
        if (e.code == 'KeyW') {
            tUp = true, tDown = false, tLeft = false, tRight = false;
            if (y <= -5) {
                return;
            }
            if (y >= y2 && y <= (y2 + height) && x >= (x2 - width) && x <= (x2 + width)) {
                return;
            }
            clearInterval(timer);
            timer = setInterval(function () {
                ctx.clearRect(x - 7, y, width + 14, height);
                ctx.drawImage(img, width * (b++ % 4), 3 * height, width, height, x, y, width, height);
                y -= step;
                if (y <= -5) {
                    clearInterval(timer);
                }
                if (y >= y2 && y <= (y2 + height) && x >= (x2 - width) && x <= (x2 + width)) {
                    clearInterval(timer);
                }
            }, int);
        }
        if (e.code == 'KeyS') {
            tUp = false, tDown = true, tLeft = false, tRight = false;
            if (y >= (cas.height - height - 5)) {
                return;
            }
            if ((y + height) >= y2 && (y + height) <= (y2 + height) && x >= (x2 - width) && x <= (x2 + width)) {
                return;
            }
            clearInterval(timer);
            timer = setInterval(function () {
                ctx.clearRect(x - 7, y, width + 14, height);
                ctx.drawImage(img, width * (i++ % 4), 0, width, height, x, y, width, height);
                y += step;
                if (y >= (cas.height - height - 5)) {
                    clearInterval(timer);
                }
                if ((y + height) >= y2 && (y + height) <= (y2 + height) && x >= (x2 - width) && x <= (x2 + width)) {
                    clearInterval(timer);
                }
            }, int);
        }
        if (e.code == 'KeyA') {
            tUp = false, tDown = false, tLeft = true, tRight = false;
            if (x <= -5) {
                return;
            }
            if (x <= (x2 + width + 4) && x >= x2 && y >= (y2 - height + 15) && y <= (y2 + height - 10)) {
                return;
            }
            clearInterval(timer);
            timer = setInterval(function () {
                ctx.clearRect(x - 7, y, width + 14, height);
                ctx.drawImage(img, width * (j++ % 4), height, width, height, x, y, width, height);
                x -= step;
                if (x <= -5) {
                    clearInterval(timer);
                }
                if (x <= (x2 + width + 4) && x >= x2 && y >= (y2 - height + 15) && y <= (y2 + height - 10)) {
                    clearInterval(timer);
                }
            }, int);
        }
        if (e.code == 'KeyD') {
            tUp = false, tDown = false, tLeft = false, tRight = true;
            if (x >= cas.width - width) {
                return;
            }
            if ((x2 - 20) <= (x + width) && (x + width) <= (x2 + width) && y >= (y2 - height + 15) && y <= (y2 + height - 10)) {
                return;
            }
            clearInterval(timer);
            timer = setInterval(function () {
                ctx.clearRect(x - 7, y, width + 14, height);
                ctx.drawImage(img, width * (a++ % 4), 2 * height, width, height, x, y, width, height);
                x += step;
                if (x >= cas.width - width) {
                    clearInterval(timer);
                }
                if ((x2 - 20) <= (x + width) && (x + width) <= (x2 + width) && y >= (y2 - height + 15) && y <= (y2 + height - 10)) {
                    clearInterval(timer);
                }
            }, int);
        }

        //2P 上下左右
        if (e.code == 'ArrowUp') {
            pUp = true, pDown = false, pLeft = false, pRight = false;
            if (y2 <= -5) {
                return;
            }
            if (y2 >= y && y2 <= (y + height) && x2 >= (x - width) && x2 <= (x + width)) {
                return;
            }
            clearInterval(timer2);
            timer2 = setInterval(function () {
                ctx.clearRect(x2 - 7, y2, width + 14, height + 2);
                ctx.drawImage(img2, width * (b2++ % 4), 3 * height, width, height, x2, y2, width, height);
                y2 -= step;
                if (y2 <= -5) {
                    clearInterval(timer2);
                }
                if (y2 >= y && y2 <= (y + height) && x2 >= (x - width) && x2 <= (x + width)) {
                    clearInterval(timer2);
                }
            }, int);
        }
        if (e.code == 'ArrowDown') {
            pUp = false, pDown = true, pLeft = false, pRight = false;
            if (y2 >= (cas.height - height - 5)) {
                return;
            }
            if ((y2 + height) >= y && (y2 + height) <= (y + height) && x2 >= (x - width) && x2 <= (x + width)) {
                return;
            }
            clearInterval(timer2);
            timer2 = setInterval(function () {
                ctx.clearRect(x2 - 7, y2, width + 14, height);
                ctx.drawImage(img2, width * (i2++ % 4), 0, width, height, x2, y2, width, height);
                y2 += step;
                if (y2 >= (cas.height - height - 5)) {
                    clearInterval(timer2);
                }
                if ((y2 + height) >= y && (y2 + height) <= (y + height) && x2 >= (x - width) && x2 <= (x + width)) {
                    clearInterval(timer2);
                }
            }, int);
        }
        if (e.code == 'ArrowLeft') {
            pUp = false, pDown = false, pLeft = true, pRight = false;
            if (x2 <= -5) {
                return;
            }
            if (x2 <= (x + width + 20) && x2 >= x && y2 >= (y - height + 15) && y2 <= (y + height - 10)) {
                return;
            }
            clearInterval(timer2);
            timer2 = setInterval(function () {
                ctx.clearRect(x2 - 7, y2, width + 14, height + 2);
                ctx.drawImage(img2, width * (j2++ % 4), height, width, height, x2, y2, width, height);
                x2 -= step;
                if (x2 <= -5) {
                    clearInterval(timer2);
                }
                if (x2 <= (x + width + 20) && x2 >= x && y2 >= (y - height + 15) && y2 <= (y + height - 10)) {
                    clearInterval(timer2);
                }
            }, int);
        }
        if (e.code == 'ArrowRight') {
            pUp = false, pDown = false, pLeft = false, pRight = true;
            if (x2 >= cas.width - width) {
                return;
            }
            if ((x - 4) <= (x2 + width) && (x2 + width) <= (x + width) && y2 >= (y - height + 15) && y2 <= (y + height - 10)) {
                return;
            }
            clearInterval(timer2);
            timer2 = setInterval(function () {
                ctx.clearRect(x2 - 7, y2, width + 14, height + 2);
                ctx.drawImage(img2, width * (a2++ % 4), 2 * height, width, height, x2, y2, width, height);
                x2 += step;
                if (x2 >= cas.width - width) {
                    clearInterval(timer2);
                }
                if ((x - 4) <= (x2 + width) && (x2 + width) <= (x + width) && y2 >= (y - height + 15) && y2 <= (y + height - 10)) {
                    clearInterval(timer2);
                }
            }, int);
        }
    }

};