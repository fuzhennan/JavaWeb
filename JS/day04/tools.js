function move(obj,attr,target,speed,callable) {
    clearInterval(obj.timer);

    //获取元素当前位置，如果大于目标位置，则为向左移动，速度取反
    var current=parseInt(getStyle(obj,attr));
    if (current>target){
        speed=-speed;
    }


    obj.timer=setInterval(function () {
        //获取元素初始值
        var oldValue= parseInt(getStyle(obj, attr));
        var newValue=oldValue+speed;

        if ((newValue>target&&speed>0)||(newValue<target&&speed<0)){
            newValue=target;
        }

        if (newValue===target){
            clearInterval(obj.timer);
            callable&&callable();
        }

        obj.style[attr]=newValue+"px";
    },30)
}


function getStyle(obj,name) {
    if (window.getComputedStyle){
        //正常浏览器方式，有该方法
        return getComputedStyle(obj,null)[name];
    } else {
        //IE8的方式，没有该方法
        return obj.currentStyle[name];
    }
}