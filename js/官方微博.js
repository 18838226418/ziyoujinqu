$(function  () {
	$(".dis-inpt ul li").hover(function  () {
		$(this).addClass("dis-inpt-hover")
		},function  () {
			$(".dis-inpt ul li").removeClass("dis-inpt-hover")
		})
		
    $(".weibo-header-input input").click(function  (event) {
    	$(".dis-inpt").show()
		$(".weibo-header-input input").val("吴佩慈否认纪晓波被抓")
		$(".weibo-header-input ").addClass("weibo-header-input-active")
        event.stopPropagation();
	})
	$(document).click(function  () {
		$(".dis-inpt").hide()
		$(".weibo-header-input input").val("大家正在搜：吴佩慈否认纪晓波被抓")
		$(".weibo-header-input").removeClass("weibo-header-input-active")
		
	})
		
})