$(function() {
	$(".nav-a").hover(function() {
		$(".nav-a").eq($(this).index()).addClass("nav-a-bg")
	}, function() {
		$(".nav-a").removeClass("nav-a-bg")
	})

	$(".nav-a").hover(function() {
		$(this).find(".nav-dis").show()
	}, function() {
		$(".nav-dis").hide()
	})
	
	
	$(".header1-ul").find("li").hover(function() {
		$(".header1-ul").find("li").eq($(this).index()).addClass("line")
	}, function() {
		$(".header1-ul").find("li").removeClass("line")
	})
	$(".header-1").hover(function  () {
		$(this).find(".dis2").show()
	},function  () {
		$(".dis2").hide()
	})

		        var i = 0;
		
		        var clone = $(".connten0 .img li").first().clone();//克隆第一张图片
		        $(".connten0 .img").append(clone);                //复制到列表最后
		        var size = $(".connten0 .img li").size();         //返回匹配元素的数量
		        console.log(size);
		
		        /*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
		        for (var j = 0; j < size-1; j++) {
		            $(".connten0 .num").append("<li></li>");
		        }
		
		        $(".connten0 .num li").first().addClass("active");
		
		        /*自动轮播*/
		
		        var t = setInterval(function () {
		            i++;
		            move();
		            },2000);
		
		        /*鼠标悬停事件*/
		
		        $(".connten0").hover(function () {
		            clearInterval(t);//鼠标悬停时清除定时器
		        }, function () {
		            t = setInterval(function () {
		                i++;
		                move();
		                }, 2000); //鼠标移出时开始定时器
		        });
		
		
		
		
		        /*鼠标滑入原点事件*/
		
		        $(".connten0 .num li").click(function () {
		
		            var index = $(this).index();//获取当前索引值
		            i = index;
		            $(".connten0 .img").stop().animate({ left: -index * 758 }, 500);
		            $(this).addClass("active").siblings().removeClass("active");
		        });
		
		
		        /*移动事件*/
		        function move() {
		            if (i == size) {
		                $(".connten0 .img").css({ left: 0 });
		                i = 1;
		            }
		            if (i == -1) {
		                $(".connten0 .img").css({ left: -(size - 1) * 758 });
		                i = size - 2;
		            }
		            $(".connten0 .img").stop().animate({ left: -i * 758 }, 758);
		
		            if (i == size - 1) {
		                $(".connten0 .num li").eq(0).addClass("active").siblings().removeClass("active");
		            } else {
		                $(".connten0 .num li").eq(i).addClass("active").siblings().removeClass("active");
		            }
		        }
				
// 				$("bar1-left-i1").hover(function  () {
// 					$("bar1-left-i1").css("background","url(../img/s_zc_btn_h.jpg)")
// 				},function  () {
// 					$("bar1-left-i1").css("background","url(../img/s_zc_btn.jpg)")
// 				})

     			$(".bar2-connten-nav li").click(function  () {
                  $(".bar2-connten-nav li").attr("class","")
     				$(this).attr("class","bar2-active")
     				var index = $(this).index();
     				i = index;
     				$(".bar2-connten-ul").stop().animate({ left: -i * 460 }, 500);
     				})
						
						
						$(".bar3-connten-nav li").click(function  () {
										$(".bar3-connten-nav li").attr("class","")
							$(this).attr("class","bar2-active")
							var index = $(this).index();
							i = index;
							$(".bar3-connten-ul").stop().animate({ left: -i * 320 }, 500);
							})
							
							$(".bar3-right-nav li").click(function  () {
											$(".bar3-right-nav li").attr("class","")
								$(this).attr("class","bar2-active")
								var index = $(this).index();
								i = index;
								$(".bar3-right-ul").stop().animate({ left: -i * 841 }, 500);
								})
								
							
							$(".bar4-connten-nav li").click(function  () {
											$(".bar4-connten-nav li").attr("class","")
								$(this).attr("class","bar2-active")
								var index = $(this).index();
								i = index;
								$(".bar4-connten-ul").stop().animate({ left: -i * 318 }, 500);
								})
									
							$(".bar4-right-nav li").click(function  () {
											$(".bar4-right-nav li").attr("class","")
								$(this).attr("class","bar2-active")
								var index = $(this).index();
								i = index;
								$(".bar4-right-ul").stop().animate({ left: -i * 841 }, 500);
								})
								
								$(".shouyemap").click(function  () {
									alert("页面正在施工，敬请期待")
								})
								$(".shouyewuqi").click(function  () {
									alert("页面正在施工，敬请期待")
								})
				
})
