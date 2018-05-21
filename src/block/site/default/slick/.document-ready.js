'use strict';
$(function() { 	
	var news = $('[data-slider-slick="slick-news"]');	
	var reviews = $('[data-slider-slick="slick-reviews"]');	
	var gallery = $('[data-slider-slick="slick-gallery"]');	
	var radio = $('[data-slider-slick="slick-radio"]');	
	var partners = $('[data-slider-slick="slick-partners"]');	
	//var prevArrow = '<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-slick-left" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#slick-left"></use></svg></button>';
	//var nextArrow = '<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-slick-right" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#slick-right"></use></svg></button>';	
	var prevArrow = '<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-slick-left" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme_new/img/svg/sprite.svg#slick-left"></use></svg></button>';
	var nextArrow = '<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-slick-right" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme_new/img/svg/sprite.svg#slick-right"></use></svg></button>'; 
	
	radio.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		autoplay: true,
  		autoplaySpeed: 4000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true,
		responsive: [
		    {
				breakpoint: 1025,
				settings: {					
					arrows: false,
					dots: true
				}
		    }
	    ]
	});
	partners.slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: false,
		autoplay: true,
  		autoplaySpeed: 2500,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1025,
				settings: {					
					arrows: false,
					dots: true,
					slidesToShow: 3,
					slidesToScroll: 1,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 1,
				}
		    },
		    {
				breakpoint: 568,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
	news.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: false,
		infinite: false,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1025,
				settings: {					
					arrows: false,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 568,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
	reviews.slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: false,
		infinite: false,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1025,
				settings: {					
					arrows: false,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 568,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
	gallery.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: false,
		infinite: false,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1025,
				settings: {					
					arrows: false,
					dots: true,
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 568,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
}); 