$(window).scroll(function(){
	var ps = $('.navbar').offset().top
	console.log(ps);
if($('.navbar').offset().top > 50){
    $('.navbar-fixed-top').addClass('top-nav-collapse');
} else {
    $('.navbar-fixed-top').removeClass('top-nav-collapse');
}
})

$(function(){
    $('.page-scroll a').bind('click',function(){
        console.log("Hi!");
        var $anchor = $(this);
		console.log($anchor);
        $('html,body').stop().animate({
            scrollTop:$($anchor.attr('href')).offset().top
        },1500,'easeInOutExpo');
        event.preventDefault();
    });
})