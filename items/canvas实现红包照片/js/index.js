/**
 * Created by Dennis on 2016/8/31.
 */
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image = new Image();
var radius = 50;
var clippingRegion = {x:1,y:1,r:radius};
var leftPosition = 0,topPosition = 0;
image.src = 'images/q.jpg';

image.onload = function(e){

    $('#blur-div').css('width',canvasWidth+'px');
    $('#blur-div').css('height',canvasHeight+'px');

    $('#image').css('width',image.width+'px');
    $('#image').css('height',image.height+'px');

    leftPosition = (image.width-canvas.width)/2;
    topPosition = (image.height-canvas.height)/2;

    $('#image').css('left','-'+leftPosition+'px');
    $('#image').css('top','-'+topPosition+'px');

    initCanvas();
}

function initCanvas(){
    clippingRegion = {x:Math.random()*(canvas.width-radius*2)+radius,y:Math.random()*(canvas.height-radius*2)+radius,r:radius};
    draw(image,clippingRegion);
}

function setClippingRegion(clippingRegion){
    context.beginPath();
    context.arc(clippingRegion.x,clippingRegion.y,clippingRegion.r,0,Math.PI*2,false);
    context.clip();
}

function draw(image){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.save();
    setClippingRegion(clippingRegion);
    context.drawImage(image,leftPosition,topPosition,canvas.width,canvas.height,0,0,canvas.width,canvas.height);
    context.restore();
}
var timerId;
function show(){
    timerId = setInterval(function(){
        console.log('qqqqq');
        clippingRegion.r += 20;
        if(clippingRegion.r>2*Math.max(canvas.width,canvas.height)){
            clearInterval(timerId);
        }
        draw(image,clippingRegion);
    },30)

}

function reset(){
    clearInterval(timerId);
    initCanvas();
}