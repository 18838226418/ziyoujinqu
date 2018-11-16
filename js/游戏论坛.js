$(function() {
	var i = 0;
	var clone = $(".team-banner li").first().clone();
	$(".team-banner ul").append(clone); 
	var size = $(".team-banner li").size(); 
	console.log(size);
	$("team-banner-button span").first().addClass("team-banner-button-active");

	var t = setInterval(function() {
		i++;
		move();
	}, 2000);

	$(".team-banner").hover(function() {
		clearInterval(t); 
	}, function() {
		t = setInterval(function() {
			i++;
			move();
		}, 2000); 
	});
	$(".team-banner-button span").click(function() {
		var index = $(this).index();
		i = index;
		$(".team-banner ul").stop().animate({
			left: -index * 1198
		}, 500);
		$(this).addClass("team-banner-button-active").siblings().removeClass("team-banner-button-active");
	});

	function move() {
		if (i == size) {
			$(".team-banner ul").css({
				left: 0
			});
			i = 1;
		}
		if (i == -1) {
			$(".team-banner ul").css({
				left: -(size - 1) * 1198
			});
			i = size - 2;
		}
		$(".team-banner ul").stop().animate({
			left: -i * 1198
		}, 758);

		if (i == size - 1) {
			$(".team-banner-button span").eq(0).addClass("team-banner-button-active").siblings().removeClass("team-banner-button-active");
		} else {
			$(".team-banner-button span").eq(i).addClass("team-banner-button-active").siblings().removeClass("team-banner-button-active");
		}
	}
})
