$(function(){
	$(".head a").click(function(){
		$(".pop").css("display","block");
		$("body").css("overflow-y","hidden");
	});	
});
$(function(){
	$(".pop span").click(function(){
		$(".pop").css("display","none");
		$("body").css("overflow-y","");
	});	
});
$(function(){
	$(".pop a").click(function(){
		$(".pop").css("display","none");
	}); 
});