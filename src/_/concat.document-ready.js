$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();r.indexOf("msie")!=-1&&(e="msie"),r.indexOf("trident")!=-1&&(e="msie"),r.indexOf("konqueror")!=-1&&(e="konqueror"),r.indexOf("firefox")!=-1&&(e="firefox"),r.indexOf("safari")!=-1&&(e="safari"),r.indexOf("chrome")!=-1&&(e="chrome"),r.indexOf("chromium")!=-1&&(e="chromium"),r.indexOf("opera")!=-1&&(e="opera"),r.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"}),$(".form__block").validationEngine("attach",{promptPosition:"bottomLeft",scroll:!1});
$("img").addClass("img-responsive");
var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.tabs__nav a[href="'+url+'"]').parent().addClass("is--active"),$('[data-azbn-toggle="dropdown"]').on("click",function(a){$(".azbn-dropdown").toggleClass("open")});
"use strict";$(function(){var s=$('[data-slider-slick="slick-news"]'),o=$('[data-slider-slick="slick-reviews"]'),i=$('[data-slider-slick="slick-gallery"]'),e=$('[data-slider-slick="slick-radio"]'),r=$('[data-slider-slick="slick-partners"]'),l='<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-slick-left" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme_new/img/svg/sprite.svg#slick-left"></use></svg></button>',t='<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-slick-right" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme_new/img/svg/sprite.svg#slick-right"></use></svg></button>';e.slick({slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!0,dots:!1,autoplay:!0,autoplaySpeed:4e3,prevArrow:l,nextArrow:t,fade:!0,responsive:[{breakpoint:1025,settings:{arrows:!1,dots:!0}}]}),r.slick({slidesToShow:5,slidesToScroll:1,arrows:!0,dots:!1,infinite:!1,autoplay:!0,autoplaySpeed:2500,prevArrow:l,nextArrow:t,responsive:[{breakpoint:1025,settings:{arrows:!1,dots:!0,slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{arrows:!1,dots:!0,slidesToShow:2,slidesToScroll:1}},{breakpoint:568,settings:{arrows:!1,dots:!0,slidesToShow:1,slidesToScroll:1}}]}),s.slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!1,infinite:!1,prevArrow:l,nextArrow:t,responsive:[{breakpoint:1025,settings:{arrows:!1,dots:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{arrows:!1,dots:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:568,settings:{arrows:!1,dots:!0,slidesToShow:1,slidesToScroll:1}}]}),o.slick({slidesToShow:3,slidesToScroll:3,arrows:!0,dots:!1,infinite:!1,prevArrow:l,nextArrow:t,responsive:[{breakpoint:1025,settings:{arrows:!1,dots:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{arrows:!1,dots:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:568,settings:{arrows:!1,dots:!0,slidesToShow:1,slidesToScroll:1}}]}),i.slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!1,infinite:!1,prevArrow:l,nextArrow:t,responsive:[{breakpoint:1025,settings:{arrows:!1,dots:!0,slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{arrows:!1,dots:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:568,settings:{arrows:!1,dots:!0,slidesToShow:1,slidesToScroll:1}}]})});
$(".text__block table").addClass("table table-bordered"),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled"),$(".text__block .table.table-bordered").wrap('<div class="table-responsive"></div>');