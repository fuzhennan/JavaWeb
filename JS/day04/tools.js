function move(obj,attr,target,speed,callback) {
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
            callback && callback();
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

        /*
        参数：
         obj：添加class的对象
         cn：添加的className
          */
function addClass(obj,cn) {
    if (!hasClass(obj,cn)) {
        obj.className += " "+cn;
    }
}

/*
参数：
obj：添加class的对象
cn：添加的className
如果有该class，则返回true，反之返回false
 */
function hasClass(obj,cn) {
    //判断obj中有没有cn，class
    //创建一个正则表达式
    // var reg=/\bb2\b/;

    var reg=new RegExp("\\b"+cn+"\\b");

    return reg.test(obj.className);
}

function removeClass(obj,cn) {
    var reg=new RegExp("\\b"+cn+"\\b");// \b 为结束符

    obj.className=obj.className.replace(reg,"");
}

/*
toggleClass可以用来切换一个类
如果元素当中有该类，则删除
没有则添加
 */
function toggleClass(obj,cn) {
    //判断obj当中是否有cn
    if (hasClass(obj,cn)){
        removeClass(obj,cn);
    } else{
        addClass(obj,cn);
    }
}