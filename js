//导航栏在不同高度显示不同样式
    $(window).scroll(function() {
    	if ($(".navbar").offset().top > 555) {
    		$(".navbar-fixed-top").addClass("top-nav");
    	} else {
    		$(".navbar-fixed-top").removeClass("top-nav");
    	}
    })
