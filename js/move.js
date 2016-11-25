function getStyle(obj,name){
	return (obj.currentStyle||getComputedStyle(obj,false))[name];
}
function move(obj,json,options){
	options=options||{};
	options.duration=options.durations||700;
	options.easing=options.easing||'ease-out';
	var start={};
	var dis={};
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		dis[name]=json[name]-start[name];
	}
	var count=Math.floor(options.duration/30);
	var n=0;
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		n++;
		
		for(var name in json){
			switch(options.easing){
				case 'linear':
					var cur=start[name]+dis[name]*n/count;
					break;
				case 'ease-in':
					var a=n/count;
					var cur=start[name]+dis[name]*Math.pow(a,3);
					break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[name]+dis[name]*(1-Math.pow(a,3));
					break;	
			}
			
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		
		if(n==count){
			clearInterval(obj.timer);
			options.complete&&options.complete();
		}
	},30);
}

//弹性菜单封装
;(function (){
	var left=0;
	var iSpeed=20;
	var count=0;
	var timer=null
	window.move2=function (obj,iTarget){
		clearInterval(timer);
		timer=setInterval(function (){
			iSpeed+=(iTarget-left)/5;
			iSpeed*=0.8;
			left+=iSpeed;
			obj.style.left=left+'px';
			if(Math.round(iSpeed)==0&&Math.round(left)==iTarget){
				clearInterval(timer);
			}
		},16);
	}
})();
//穿墙函数封装
function getDir(obj,ev){
	var x=obj.getBoundingClientRect().left+obj.offsetWidth/2-ev.clientX;
	var y=obj.getBoundingClientRect().top+obj.offsetHeight/2-ev.clientY;
	
	return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
}
function through(obj){
	obj.onmouseenter=function (ev){
		var oLi=obj.children[0];
		var oEvent=ev||event;
		var dir=getDir(obj,oEvent);
		switch(dir){
			case 0:
				oLi.style.left='200px';
				oLi.style.top=0;
				break;
			case 1:
				oLi.style.left=0;
				oLi.style.top='200px';
				break;
			case 2:
				oLi.style.left='-200px';
				oLi.style.top=0;
				break;
			case 3:
				oLi.style.left=0;
				oLi.style.top='-200px';
				break;
		}
		move(oLi,{left:0,top:0})
	};
	obj.onmouseleave=function (ev){
		var oLi=obj.children[0];
		var oEvent=ev||event;
		var dir=getDir(obj,oEvent);
		switch(dir){
			case 0:
				move(oLi,{top:0,left:200});
				break;
			case 1:
				move(oLi,{top:200,left:0});
				break;
			case 2:
				move(oLi,{top:0,left:-200});
				break;
			case 3:
				move(oLi,{top:-200,left:0});
				break;
		}
	};
}