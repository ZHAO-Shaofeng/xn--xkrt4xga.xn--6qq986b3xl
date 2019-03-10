$(function(){
	// $(".button-collapse").sideNav();
	// 预加载
	// $(window).load(function() {
	// 	$(".loader-wrapper").delay(300).fadeOut();
	// 	$(".wrapperBox").delay(600).fadeOut("slow");
	// });

	$('.modal').modal();

	// 滚动时头部加阴影
	$(".info-form textarea").scroll(function(){
	  if ($(this).scrollTop() > 0) {
	    $('.navbar-fixed nav').addClass("shadow");
	  } else {
	    $('.navbar-fixed nav').removeClass("shadow");
	  }
	});
	$(window).scroll(function(){
	  if ($(document).scrollTop() > 0) {
	    $('.navbar-fixed nav').addClass("shadow");
	  } else {
	    $('.navbar-fixed nav').removeClass("shadow");
	  }
	});

	// 写文章，如果为空不提交
	$('[name="write_ok"]').submit(function(e){
		if ($('[name="info"]').val()=="") {
			console.log(111);
			Materialize.toast('这么懒的吗，啥都不写...', 3000);
			e.preventDefault();
		}
	})

})