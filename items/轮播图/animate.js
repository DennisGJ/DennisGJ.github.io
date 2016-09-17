/**
 * Created by Dennis on 2016/6/17.
 */
function animate(element,target){
    //清除之前的定时器
    if(element.timerId){
        clearInterval(element.timerId);
    }
    //设置目标和步进
    var step = 20;
    //伪元素对象设置定时器属性
    element.timerId = setInterval(function () {
        var current = element.offsetLeft;
        if(current>target){
            step = -Math.abs(step);
        }

        if (Math.abs(target-current)>Math.abs(step)){
            current +=step;
            element.style.left = current+"px";
        }else{
            clearInterval(element.timerId);
            element.style.left = target+"px";
        }
    },5)
}