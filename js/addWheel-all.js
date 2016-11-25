/**
 * Created by ZhuWQ on 2016/8/16.
 */
function addEvent(obj,sEv,fn) {
    if (obj.addEventListener) {
        obj.addEventListener(sEv,fn,false);
    } else {
        obj.attachEvent('on'+sEv,fn);
    }
}

function addWheel(obj,fn) {
    function wheel(ev){
        var oEvent = ev || event;
        /*if (oEvent.wheelDelta) {
            bDown = oEvent.wheelDelta < 0;
        } else {
            bDown = oEvent.detail > 0;
        }*/
        var bDown = true; // 默认向下滚
        bDown = oEvent.wheelDelta ? oEvent.wheelDelta < 0 : oEvent.detail > 0;
        // 根据鼠标滚动的方向做事情
        fn && fn(bDown);

        // 阻止默认
        oEvent.preventDefault && oEvent.preventDefault();
        return false;
    }

    // 判断浏览器的类型
    if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
        obj.addEventListener('DOMMouseScroll',wheel,false);
    } else {
        //obj.onmousewheel = wheel;
        addEvent(obj,'mousewheel',wheel);
    }
}
