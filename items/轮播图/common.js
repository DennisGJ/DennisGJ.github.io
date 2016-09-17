/**
 * Created by jiaoshou on 2016/6/8.
 */
function my$(id) {
    return document.getElementById(id);
}

//获dom对象的innerText的取值
function getInnerText(element) {
    //判断当前浏览器是否支持innerText
    if(typeof element.innerText  === "string") {
        return element.innerText;
    }else{
        return element.textContent;
    }
}

//设置dom对象的innerText
function setInnerText(element, content) {
    if(typeof element.innerText === "string") {
        element.innerText = content;
    }else{
        element.textContent = content;
    }
}

//兼容浏览器   获取下一个兄弟元素
function getNextElementSibling(element) {
    //
    if(element.nextElementSibling){
        return element.nextElementSibling;
    }else{
        //获取下一个兄弟节点
        var node = element.nextSibling;
        //如果没有下一个节点，此时null
        while(node && node.nodeType !== 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

//获取上一个兄弟元素
function getPreviousElementSibling(element){
    if(element.previousElementSibling){
        return element.previousElementSibling;
    }else{
        //获取上一个兄弟节点
        var node = element.previousSibling;
        while(node&&node.nodeType !==1){
            node = node.previousSibling;
        }
        return node;
    }
}

//获取第一个子元素  屏蔽浏览器的差异
function getFirstElementChild(element) {
    if(element.firstElementChild) {
        return element.firstElementChild;
    }else{
        //获取第一个子节点
        var node = element.firstChild;
        while(node && node.nodeType !== 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

//获取最后一个子元素
function getLastElementChild(element){
    if(element.lastElementChild){
        return element.lastElementChild;
    }else{
        var node = element.lastChild;
        while(node&&node.nodeType !==1){
            node = node.previousSibling;
        }
        return node;
    }
}

function getDate(date){
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = setForm(month);
    day = setForm(day);
    hour = setForm(hour);
    min = setForm(min);
    sec = setForm(sec);
//        补0
    function setForm(time){
        return time<10 ? "0"+time:time;
    }

    //month = month<10?"0"+month:month;
    //day = day<10?"0"+day:day;
    //hour = hour<10?"0"+hour:hour;
    //min = min<10?"0"+min:min;
    //sec = sec<10?"0"+sec:sec;

    return year+"-"+month+"-"+day+" "+hour+":"+min+":"+sec;
}
//事件工具
var EventTools = {

    addEventlistener: function (element,eventName,handler) {
        if(element.addEventListener){
            element.addEventListener(eventName,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+eventName,handler);
        }else{
            element["on"+eventName] = handler;
        }
    },

    removeEventListener: function (elememt,eventName,handler) {
        if(elememt.removeEventListener){
            elememt.removeEventListener(eventName,handler,false);
        }else if(elememt.detachEvent){
            elememt.detachEvent("on"+eventName,handler);
        }else{
            elememt["on"+eventName] = null;
        }
    }
}