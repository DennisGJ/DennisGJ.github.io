//小火箭
$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) { //向下滚动像素大于这个值时，即出现小火箭~
            $('.actGotop').fadeIn(300); //火箭淡入的时间，越小出现的越快~
        } else {
            $('.actGotop').fadeOut(300); //火箭淡出的时间，越小消失的越快~
        }
    });
    $('.actGotop').click(function() {
        $('html,body').animate({
            scrollTop: '0px'
        }, 800);
    }); //火箭动画停留时间，越小消失的越快~
});

$(function(){
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 60) {
        $('.gj-header').css('backgroundColor', 'rgba(60, 66, 82, 0.5)');
    } else {
        $('.gj-header').css('backgroundColor', 'rgba(60, 66, 82, 1)');
    }
    });
})