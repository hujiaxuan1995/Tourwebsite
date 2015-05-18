/**
 * Created by hujiaxuan on 2015/4/30.
 */
window.onload= init();
var change = 0;
var change1 = 0;
var change2 = 0;
var change3 = 0;
var change4 = 0;
var change5 = 0;
function init() {

    nav_animate();
    scroll_listener();
}

function scroll_listener(){


    addEvent(window,"scroll",set_wallpaper);

}

function setOpacity(obj1){

}
function set_wallpaper(){
    var item = new Array(6);
    item[0] = document.getElementsByClassName("section01")[0];
    item[1] = document.getElementsByClassName("section02")[0];
    item[2] = document.getElementsByClassName("section03")[0];
    item[3] = document.getElementsByClassName("section04")[0];
    item[4] = document.getElementsByClassName("section05")[0];
    item[5] = document.getElementsByClassName("section06")[0];
    var top = document.body.scrollTop | document.documentElement.scrollTop;
    var height0 = getabposition(item[0]);
    var height1 = getabposition(item[1]);
    var height2 = getabposition(item[2]);
    var height3 = getabposition(item[3]);
    var height4 = getabposition(item[4]);
    var height5 = getabposition(item[5]);
    if (window.innerWidth)
        winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        var winWidth = document.body.clientWidth;

    if((top - height1) <50 && (top - height1 >0) ) {
        if(change == 0){
            change = 1;

        }
    }
    if(top-(height1+item[1].offsetHeight)>100){
        if(change == 1){
            change = 0;

        }
    }
////////////////////////////////////////////////////////////////////
    if((top - height2) <200 && (top - height2 >0) ) {
        if(change1 == 0){
            change1 = 1;

        }
    }
    if(top-(height2+item[2].offsetHeight)>0){
        if(change1 == 1){
            change1 = 0;

        }
    }
///////////////////////////////////////////////////////////////////////
    if((top - height2) <200 && (top - height2 >0) ) {
        if(change1 == 0){
            change1 = 1;

        }
    }
    if(top-(height2+item[2].offsetHeight)>0){
        if(change1 == 1){
            change1 = 0;

        }
    }
//////////////////////////////////////////////////////////////////////////////
    if((top - height3) <200 && (top - height3 >0) ) {
        if(change2 == 0){
            change2 = 1;

        }
    }
    if(top-(height3+item[3].offsetHeight)>0){
        if(change2 == 1){
            change2 = 0;

        }
    }
///////////////////////////////////////////////////////////////////////////
    if((top - height4) <200 && (top - height4 >0) ) {
        if(change3 == 0){
            change3 = 1;

        }
    }
    if(top-(height4+item[4].offsetHeight)>0){
        if(change3 == 1){
            change3 = 0;

        }
    }
//////////////////////////////////////////////////////////////
    if((top - height5) <200 && (top - height5 >0) ) {
        if(change4 == 0){
            change4 = 1;

        }
    }
    if(top-(height5+item[5].offsetHeight)>0){
        if(change4 == 1){
            change4 = 0;

        }
    }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

}
function getabposition(e){
    var top = e.offsetTop;
    while(e = e.offsetParent){
        top = top + e.offsetTop;
    }
    return top;
}
function addEvent(eventTarget,eventType,eventHandler){
    if(eventHandler.addEventListener){
        eventTarget.addEventListener(eventType,eventTarget,false);
    }else{
        if(eventHandler.attachEvent){
            eventType = "on" + eventType;
            eventTarget.attachEvent(eventType,eventHandler);
        }else{
            eventTarget["on"+eventType] = eventHandler;
        }
    }

}
function nav_animate() {
    var item = document.getElementsByClassName("nav_menu")[0].children;
    for(var i=0;i<item.length;i++) {
        //闭包的解决，使用匿名函数
        (function() {
            var temp = i;
            item[temp].onmouseover = function() {
                this.firstChild.firstChild.src = "./image/nav_bgA0"+(temp+2)+"H.png";

                start_run(this.firstChild.firstChild,"height","130");
            }
            item[temp].onmouseout = function() {
                this.firstChild.firstChild.src = "./image/nav_bgA0"+(temp+2)+".png";

                start_run(this.firstChild.firstChild,"height","60");
            }
        })();
    }
}
function start_run(obj,attr,target,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var cur = 0;
        if(attr == "height") {
            cur = parseInt(getstyle(obj,attr));
        }
        var speed = (target-cur)/5;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);
        if(cur == target) {
            clearInterval(obj.timer);
        }
        else{
            obj.style[attr] = cur + speed + "px";

        }
    },30);
}
function getstyle(obj,name) {
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }else{
        return getComputedStyle(obj,false)[name];
    }
}
function nav_list_hover(){
    var icon = document.getElementsByClassName('');
}