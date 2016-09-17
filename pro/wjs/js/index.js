/**
 * Created by Dennis on 2016/7/16.
 */
$(function () {
    //轮播图
    banner();
    //产品栏滑动效果
    productTab();
    /*初始化工具提示*/
    $('[data-toggle="tooltip"]').tooltip();
})

function banner(){

    var list = [
        {
            bac:'images/slide_01_2000x410.jpg',
            img:'images/slide_01_640x340.jpg'
        },
        {
            bac:'images/slide_02_2000x410.jpg',
            img:'images/slide_02_640x340.jpg'
        },
        {
            bac:'images/slide_03_2000x410.jpg',
            img:'images/slide_03_640x340.jpg'
        },
        {
            bac:'images/slide_04_2000x410.jpg',
            img:'images/slide_04_640x340.jpg'
        }
    ]
    /*
     * 1.准备数据    json格式的数组
     * 2.解析数据转化成html结构  之前的做法：拼接字符串  （现在：模版引擎  underscore template方法）
     *   判断当前是移动端还是非移动端  决定你要渲染的html结构
     * 3.渲染到页面当中
     * 4.监听到屏幕的宽度  html结构的切换  渲染
     * */
    var randerHtml = function () {
    //    判断是否是移动端
        var width = $(window).width();

        var isMobile = width<768? true:false;
    //    准备模板
        var pointTemplate = $("#point_template").html();
        var imageTemplate = $("#image_template").html();
    //    模板方法
        var pointFun = _.template(pointTemplate);
        var imageFun = _.template(imageTemplate);
    //解析数据成html结构
        var pointHtml = pointFun({model:list});
        var imageHtml = imageFun({
            model:{
                imglist:list,
                isM:isMobile
            }
        });
    //    渲染到页面
        $(".carousel-indicators").html(pointHtml);
        $(".carousel-inner").html(imageHtml);

    }

    $(window).on("resize", function () {
        randerHtml();
    }).trigger("resize");

//    移动端滑动切换
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    var isMove = false;
    $(".wjs_banner").on('touchstart', function (e) {
        startX = e.originalEvent.touches[0].clientX;
    });
    $(".wjs_banner").on('touchmove', function (e) {
        moveX = e.originalEvent.touches[0].clientX;
        distanceX = moveX-startX;
        isMove = true;
    });
    $(".wjs_banner").on('touchend', function (e) {
        if(Math.abs(distanceX)>50&&isMove){
            if(distanceX>0){
                $('.carousel').carousel('prev');
            }else{
                $('.carousel').carousel('next');
            }
        }
        startX = 0;
        moveX = 0;
        distanceX = 0;
        isMove = false;
    });
}

//产品栏滑动效果
function productTab(){
    var parent = $(".nav-tabs-parent");
    var child = parent.find(".nav-tabs");
    var lis = child.find("li");
    var width = 0;

    $.each(lis, function (index,dom) {
        width += $(dom).innerWidth();
    });
    child.width(width);


    itcast.iScroll({
        swipeDom:parent.get(0),
        swipeType:'x',
        swipeDistance:50
    });
}
