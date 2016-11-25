//鼠标滚动
$(function(){
	var a = 1;
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        navigation: true,
		afterLoad: function(anchorLink, index){
			if(index == 1){
				if(a == 1){
						$('.duce-brief').css("width",0);
					$('.one').find('.portrait').delay(500).animate({
						marginTop: -150,
						opacity: 1
					}, 1500,function(){
						$('.one').find('h3').delay(500).animate({
							marginTop: 0,
							opacity: 1
						}, 1000,function(){
							
							$('.duce-brief').delay(300).animate({
								width:800
							}, 500,function(){
								$('.one').find('p:nth-child(1)').delay(300).animate({
									opacity:1
								}, 500,function(){
									$('.one').find('p:nth-child(2)').delay(300).animate({
							
										opacity:1
					
									}, 500,function(){
										$('.one').find('p:nth-child(3)').delay(300).animate({
							
											opacity:1
										},500)
									})
								})
							});
						});
					});
					a=2;
				}
			}
			if(index == 2){
				$('.two-me h3').css({"width":0,"height":0,"display":"block"});
				$('.two-me h3').html("");
				$('.two-me h3').delay(500).animate({
					width: '200'
				}, 700,function(){
					$('.two-me h3').html("·About me·");
					$('.two-me h3').animate({
						height: '50'
					}, 700)
				});
				
				//$(".two-text p:nth-child(1)").css({"marginLeft":-1000,"opacity":0});
				$('.two-text p:nth-child(1)').delay(500).animate({
					marginTop: '0',
					opacity:'1'
				}, 700,function(){
					$('.two-text p:nth-child(2)').delay(500).animate({
						marginLeft: '0',
						opacity:'1'
					}, 700,function(){
						$('.two-text p:nth-child(3)').delay(500).animate({
							marginRight: '0',
							opacity:'1'
						}, 700,function(){
							$('.two-text p:nth-child(4)').delay(500).animate({
								marginBottom: '0',
								opacity:'1'
							}, 700)
						});
					});
				});
			}

			if(index == 3){

				$('.three-me h3').css({"width":0,"height":0,"display":"block"});
				$('.three-me h3').html("");
				$('.three-me h3').delay(500).animate({
					width: '200'
				}, 700,function(){
					$('.three-me h3').html("·Skills·");
					$('.three-me h3').animate({
						height: '50'
					}, 700)
				});
				$(".three-p").animate({
					opacity:1,
				},2000);

			}

			if(index == 4){

				$('.four-me h3').css({"width":0,"height":0,"display":"block"});
				$('.four-me h3').html("");
				$('.four-me h3').delay(500).animate({
					width: '200'
				}, 700,function(){
					$('.four-me h3').html("·Personal Works·");
					$('.four-me h3').animate({
						height: '50'
					}, 700)
				});

			}
			if(index == 5){

				$('.five-me h3').css({"width":0,"height":0,"display":"block"});
				$('.five-me h3').html("");
				$('.five-me h3').delay(500).animate({
					width: '200'
				}, 700,function(){
					$('.five-me h3').html("·Personal Works·");
					$('.five-me h3').animate({
						height: '50'
					}, 700)
				});
				$('.lgdm p:nth-child(1)').delay(500).animate({
					marginLeft: '0',
					opacity: '1'
				}, 500,function(){
					$('.lgdm p:nth-child(2)').delay(500).animate({
						marginRight: '0',
						opacity: '1'
					}, 500,function(){
						$('.five-text').delay(500).animate({
							opacity: '1'
						}, 700)
					})
				});

			}

		},

		onLeave: function(index, direction){

			if(index == '2'){
				$('.two-me h3').css("display","none");
	
				$('.two-text').find('p').delay(500).animate({

					marginLeft: '0'

				}, 1500);

			}

			if(index == '3'){

				$('.three-me h3').css("display","none");

			}

			if(index == '4'){

				$('.four-me h3').css("display","none");

			}
			if(index == '5'){

				$('.five-me h3').css("display","none");

			}

		}


    })
})



$(function(){
	//顶部标题文字切换
	$(".header-intro").mouseover(function(){
		$("p:eq(0)").html("FE");
		$("p:eq(1)").html("前端工程师");
	}).mouseout(function(){
		$("p:eq(0)").html("Resume");
		$("p:eq(1)").html("个人简历");	
	});
	//头像
	$(".portrait img").mouseover(function(){
		$(this).css({
			"transition":"1s all ease",
			"-webkit-transition":"1s all ease",
			"-moz-transition":"1s all ease",
			"transform":"scale(-1,1)",
			"-webkit-transform":"scale(-1,1)",
			"-moz-transform":"scale(-1,1)",
			
		});
	}).mouseout(function(){
		$(this).css({
			"transition":"1s all ease",
			"-webkit-transition":"1s all ease",
			"-moz-transition":"1s all ease",
			"transform":"",
			"-webkit-transform":"",
			"-moz-transform":"",
			
		});
	});
	//关于我
	$(".degree").mouseover(function(){
		$(this).css({
			"transition":"1s",
			"-webkit-transition":"1s",
			"-moz-transition":"1s",
			"border":"4px solid #ccc",
			"background":"#fff"
			
		});
	}).mouseout(function(){
		$(this).css({
			"border":"4px solid #fff",
			background:""
			
		});
	});


	//专业技能

	$(".three-skill-img1 img").click(function(){
		//$(this).parent().parent().children(".three-skill-into").toggle();
		//获取当前li的长度
		var l = $(this).parent().parent().children(".three-skill-into").find("li").length;
		$(this).parent().parent().children(".three-skill-into").css("height",l*20+40);
		

		if(!$(this).parent().hasClass("a")){
			$(".three-skill-into").slideUp("slow");
			$(".three-skill li>div").removeClass("a");
			$(this).parent().addClass("a");
			$(this).parent().parent().children(".three-skill-into").slideToggle("slow");
			//三角旋转
			$(".three-skill-img2").css({
				"transition":"1s",
				"-webkit-transition":"1s",
				"-moz-transition":"1s",
				"transform":"rotate(180deg)",
				"-webkit-transform":"rotate(180deg)",
				"-moz-transform":"rotate(180deg)",
			});
			$(this).parent().parent().children(".three-skill-img2").css({
				"transition":"1s",
				"-webkit-transition":"1s",
				"-moz-transition":"1s",
				"transform":"rotate(360deg)",
				"-webkit-transform":"rotate(360deg)",
				"-moz-transform":"rotate(360deg)",
			});

		}else{
			$(this).parent().removeClass("a");
			$(this).parent().parent().children(".three-skill-into").slideUp("slow");
			$(this).parent().parent().children(".three-skill-img2").css({
				"transition":"1s",
				"-webkit-transition":"1s",
				"-moz-transition":"1s",
				"transform":"rotate(180deg)",
				"-webkit-transform":"rotate(180deg)",
				"-moz-transform":"rotate(180deg)",
			});
		}
		
		//$(this).parent().parent().children(".three-skill-into").slideUp("slow");
	});
	//个人作品
	$(".four-work li").click(function(){
		alert("正在建设中")
	});

});



//穿墙函数调用
$(function(){
	var aLi = $(".four-work li");
	for(var i=0; i<aLi.length; i++){
		through(aLi[i]);
	}
})

//弹性菜单
window.onload=function (){
	var oSu= document.getElementById('subnav');
	var oUl=oSu.children[0];
	var aLi=oUl.children;
	var oPos=document.getElementById('pos');
	
	var pos=0;
	for(var i=0; i<aLi.length; i++){
		aLi[i].onmouseover=function (){
			move2(oPos,this.offsetLeft);
		};
		aLi[i].onmouseout=function (){
			move2(oPos,pos);
		};
	
		aLi[i].onclick=function (){
			pos=this.offsetLeft;
			move2(oPos,pos);
		};
	}
	aLi[2].onclick=function (){
		pos=this.offsetLeft;
		move2(oPos,pos);
		alert(934609468);
	};
	aLi[3].onclick=function (){
		pos=this.offsetLeft;
		move2(oPos,pos);
		alert("934609468@qq.com");
	};
	aLi[4].onclick=function (){
		pos=this.offsetLeft;
		move2(oPos,pos);
		alert("正在建设中");
	};
	
};
