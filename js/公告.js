$(function  () {
	$(".gonggaobar2-bos").eq(0).show()
	$(".gonggao-bar2-nav li").click(function  () {
	$(".gonggao-bar2-nav li").attr("class","")
		$(this).attr("class","gonggao-bar2-nav-active")
		
		$(".gonggaobar2-bos").css("display","none")
		$(".gonggaobar2-bos").eq($(this).index()).css("display","block")
	})
})