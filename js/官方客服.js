$(function() {
	var i = 0;
	var clone = $(".service-connten-banner ul li").first().clone();
	$(".service-connten-banner ul").append(clone); 
	var size = $(".service-connten-banner li").size(); 
	console.log(size);
	$(".service-connten-banner-box a").first().addClass("service-connten-banner-active");

	var t = setInterval(function() {
		i++;
		move();
	}, 2000);

	$(".service-connten-banner").hover(function() {
		clearInterval(t); 
	}, function() {
		t = setInterval(function() {
			i++;
			move();
		}, 2000); 
	});
	$(".service-connten-banner-box a").click(function() {
		var index = $(this).index();
		i = index;
		$(".service-connten-banner ul").stop().animate({
			left: -index * 1000
		}, 500);
		$(this).addClass("service-connten-banner-active").siblings().removeClass("service-connten-banner-active");
	});

	function move() {
		if (i == size) {
			$(".service-connten-banner ul").css({
				left: 0
			});
			i = 1;
		}
		if (i == -1) {
			$(".service-connten-banner ul").css({
				left: -(size - 1) * 1000
			});
			i = size - 2;
		}
		$(".service-connten-banner ul").stop().animate({
			left: -i * 1000
		}, 758);

		if (i == size - 1) {
			$(".service-connten-banner-box a").eq(0).addClass("service-connten-banner-active").siblings().removeClass("service-connten-banner-active");
		} else {
			$(".service-connten-banner-box a").eq(i).addClass("service-connten-banner-active").siblings().removeClass("service-connten-banner-active");
		}
	}
	
	
	
})
