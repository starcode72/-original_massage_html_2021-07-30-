// $(function(){
// 	$(window).scroll(function (){
// 			$("#about_container").each(function(){
// 					var targetElement = $(this).offset().top;
// 					var scroll = $(window).scrollTop();
// 					var windowHeight = $(window).height();
// 					if (scroll > targetElement - windowHeight + 100){
// 							$(this).css('opacity','1');
// 							$(this).css('transform','translateY(0)');
// 					}
// 			});
// 	});
// });//function



// 	$(window).scroll(function() {
// 	$("#thumbnail_list").each(function() {
// 		var elemPos = $(this).offset().top;
// 		var scroll = $(window).scrollTop();
// 		var windowHeight = $(window).height();
// 		if (scroll >= elemPos - windowHeight +100) {
// 			$(this).addClass("fadeIn");
// 		} else {
// 			$(this).removeClass("fadeIn");
// 		}
// 	});
// });





$(window).scroll(function(){
	$("section").each(function(){
		const target = $(this).offset().top;
		const scroll = $(window).scrollTop();
		const windowHeight = $(window).height();
		if (scroll >= target - windowHeight + 100) {
			$(this).addClass("fadeIn");
		}else {
			$(this).removeClass("fadeIn");
		}
	});
});






$("#open_button").click(function() {
	// $(this).toggleClass("active");
	$("#mobile_nav_wrap").toggleClass("active");
});

$("#close_button").click(function() {
	// $("#open_button").removeClass("active");
	$("#mobile_nav_wrap").removeClass("active");
});


$("#mobile_nav_wrap a").click(function() {
	$("#mobile_nav_wrap").removeClass("active");
});




$(window).on("load", function() {
	$("#question dd").hide();
});


$("#question dt").click(function() {
	$(this).next().slideToggle();
});


$(function() {
	$("#open_button").on("click", function(){
		$("body").css("overflow-y", "hidden");
	});
	$("#close_button").on("click", function() {
		$("body").css("overflow-y", "auto");
	});
});