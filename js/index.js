// //导航栏筋斗云动画
// var nav = document.getElementById("gj-top-nav");
// var cloud = document.getElementById("cloud");
// //声明标记
// var target = 384;
// //注册事件
// for (var i = 0; i < nav.children.length; i++) {
//     var li = nav.children[i];
//     li.onmouseover = function() {
//         animate(cloud, {
//             left: this.offsetLeft
//         });
//     }
//     li.onmouseout = function() {
//         animate(cloud, {
//             left: target
//         });
//     }
//     li.onclick = function() {
//         target = this.offsetLeft;
//     }
// }

//滚动动画

$(window).scroll(function() {
    if ($(window).scrollTop() >= 60) {
        $('.gj-header').css('backgroundColor', 'rgba(60, 66, 82, 0.5)');
    } else {
        $('.gj-header').css('backgroundColor', 'rgba(60, 66, 82, 1)');
    }
    if ($(window).scrollTop() >= 600) {
        $(".gj-info").animate({
            "opacity": 1
        }, 1000)
        $(".gj-info .icon-1").animate({
            "bottom": "100px",
            "opacity": 1
        }, 10)
        $(".gj-info .icon-2").animate({
            "right": "55%",
            "opacity": 1,
        }, 800)
        $(".gj-info h2").animate({
            "margin": "80px auto 35px",
            "opacity": 1
        }, 1000, function() {
            $(".gj-info .icon-line").animate({
                "opacity": 1
            }, function() {
                $(".gj-info p").animate({
                    "top": "280px",
                    "opacity": 1
                });
            });
        });
    }
});

//游戏部分

function fn() {
    $('#game').html('<div class="gameStart">'
                    +'<input id="start" type="button" value="开始游戏"></div>'
                +'<div id="bird"></div>');
    $('.gameStart').css('display', 'block');
    $('#start').on('click', function() {
        $('.gameStart').css('display', 'none');
        myGame(fn);
    });
}
fn();


//顺时针封装函数
function clock(element, step) {
    var rotate = 0;
    setInterval(function() {
        rotate += step;
        if (rotate > 360) {
            rotate = 0;
        }
        element.css("transform", "rotate(" + rotate + "deg)");
    }, 30);
}
//逆时针封装函数
function antiClock(element, step) {
    var rotate = 0;
    setInterval(function() {
        rotate -= step;
        if (rotate < -360) {
            rotate = 0;
        }
        element.css("transform", "rotate(" + rotate + "deg)");
    }, 30);
}
//旋转动画
clock($(".gj-info .icon-1 li:eq(0)"), 10);
clock($(".gj-info .icon-1 li:eq(2)"), 8);
clock($(".gj-info .icon-1 li:eq(4)"), 3);
antiClock($(".gj-info .icon-1 li:eq(1)"), 5);
antiClock($(".gj-info .icon-1 li:eq(3)"), 5);

