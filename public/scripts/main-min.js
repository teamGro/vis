!function(){"use strict";let e={numbers:[{href:"+79044027952",num:"8 904 402 79 52"}],showAddNumbers:function(e,a){for(let s=0;s<a.length;s++)console.log(e),e.append(`\n    <a class="header__tel header__tel_add" href="tel:${(n=a[s]).href}">\n        <span class="header__tel-num">${n.num}</span>\n    </a>`);var n;e.slideDown()}};const a=$(".burger"),n=$(".burger__elem_top"),s=$(".burger__elem_middle"),t=$(".burger__elem_bottom"),r=$(".header__menu");a.on("click",function(){!function(e,a,n,s,t){e.hasClass("burger_closed")?(a.animate(),n.animate({opacity:0},{duration:100}),s.animate(),t.addClass("header__menu_open"),e.animate().removeClass("burger_closed").addClass("burger_opened")):e.hasClass("burger_opened")&&(a.animate(),n.animate({opacity:1}),s.animate(),t.removeClass("header__menu_open"),e.animate().removeClass("burger_opened").addClass("burger_closed"))}($(this),n,s,t,r)});const _=$(".header__contacts-expand");$(".header__tel-btn").on("click",function(a){if(a.preventDefault(),$(this).hasClass("header__tel-btn_active"))return _.slideUp(),_.empty(),void $(this).removeClass("header__tel-btn_active");$(this).addClass("header__tel-btn_active"),e.showAddNumbers(_,e.numbers)})}();