!function(){"use strict";const e=$(".burger"),t=$(".burger__elem_top"),a=$(".burger__elem_middle"),r=$(".burger__elem_bottom"),i=$(".header__menu");let s={numbers:[{href:"+79044027952",num:"8 904 402 79 52"}],showAddNumbers:function(e,t){for(let r=0;r<t.length;r++)e.append(`\n    <a class="header__tel header__tel_add" href="tel:${(a=t[r]).href}">\n        <span class="header__tel-num">${a.num}</span>\n    </a>`);var a;e.slideDown()}};const n=$(".questions__list");let o=null;let l={},c=$(".overlay_delivery"),u=$(".popup_delivery"),d=$(".popup__close_delivery");l.sendData=function(e,t){$.post(t,e.serializeArray()).done(function(t){if("formDelivery"==e.attr("id"))return function(e,t){let a=$(window).scrollTop()+$(window).height()/2-e.height()/2;a<60&&(a=60);t.addClass("overlay_active"),e.css("transform",`translateY(${a}px)`),t.css("transform","translateX(0)")}(u,c),void d.on("click",()=>{!function(e){e.css("transform","translateX(-100vw)"),e.removeClass("overlay_active")}(c)});e.addClass("visually-hidden"),e.parent().find(".popup__text_answer").css("display","block"),e.parent().find(".popup__text_main").css("display","none");let a=e.closest(".popup");a.css("transform",`translateY(${$(window).scrollTop()+$(window).height()/2-a.height()/2}px)`)})},l.recoveryForm=function(e,t,a){e.on("click",()=>{t.hasClass("visually-hidden")?(a(),setTimeout(()=>{t.removeClass("visually-hidden"),t.parent().find(".popup__text_answer").css("display","none"),t.parent().find(".popup__text_main").css("display","block")},300)):a()})};$("#callbackForm");let p={addError:function(e){e.on("blur",function(){""==$(this).val().trim()&&$(this).addClass("input_empty")})},removeErr:function(e){e.on("focus",function(){$(this).hasClass("input_empty")&&$(this).removeClass("input_empty")})},btnHandler:function(e,t,a,r){e.on("click",function(i){i.preventDefault();let s=[];""==t.val().trim()&&(t.addClass("input_empty"),s.push(t)),""==a.val().trim()&&(a.addClass("input_empty"),s.push(a)),e.hasClass("delivery__btn")&&1!=$("#user-agree").prop("checked")&&s.push($("#user-agree")),s.length||l.sendData(e.closest("form"),r)})}},_=$('[data-type="callback"]'),m=$(".overlay_callback"),v=$(".popup_calback"),f=$(".popup__close");function h(){m.css("transform","translateX(-100vw)"),m.removeClass("overlay_active")}function g(){m.hasClass("overlay_active")?h():function(){let e=$(window).scrollTop()+$(window).height()/2-v.height()/2;e<60&&(e=60),m.addClass("overlay_active"),v.css("transform",`translateY(${e}px)`),m.css("transform","translateX(0)")}()}let b=$("#callbackForm");const w=$(".burger"),C=$(".burger__elem_top"),y=$(".burger__elem_middle"),k=$(".burger__elem_bottom"),x=$(".header__menu");let T=$(".navigation__list");let q={};const N=$(".tabs"),S=$(".tooltip"),E=$(".price__list"),A=$(".tooltip__close");let D={delivery:{markup:function(e){return`<p class="price__delivery">${e}</p>`},data:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a posuere mi. Morbi imperdiet felis id vulputate rhoncus. Curabitur pellentesque cursus gravida. Curabitur ornare dignissim mauris at hendrerit. Duis ut cursus arcu. Duis laoreet dui ac ultrices congue. Suspendisse lacus lacus, vulputate a eleifend ac, gravida nec tortor. Morbi at sagittis tortor. Sed egestas cursus accumsan. In et metus luctus, accumsan leo vitae, tincidunt sapien.","Donec at orci a risus aliquet aliquet. Aliquam rutrum est sit amet eleifend porta. Sed in erat metus. Nam tristique volutpat purus eget ornare. Phasellus ultrices turpis nec condimentum dapibus. Suspendisse id est at sem efficitur placerat ut vitae leo. Aenean consectetur pulvinar mollis. Sed ac sodales orci. Ut scelerisque nulla sit amet consectetur commodo. Vivamus nec velit ut eros dignissim consequat. Suspendisse elementum dolor sed purus rhoncus mollis. Nullam laoreet ligula urna, non ultricies tortor posuere at. Pellentesque aliquet nunc nec lorem commodo porttitor et nec ipsum. Sed eget diam sodales, rutrum lorem eu, molestie erat.","Suspendisse pellentesque felis vitae sapien interdum, ut tincidunt est porttitor. Nam purus leo, vulputate eu tincidunt vel, placerat in eros. Nam et lobortis arcu. Nulla augue urna, placerat in felis nec, tempor mollis tellus. Sed hendrerit diam ligula, ac molestie diam euismod eu. Nulla sem justo, faucibus in sagittis ut, maximus eu lorem. Ut ut tortor hendrerit, tempus neque vitae, pharetra tellus. Duis mattis mauris at justo cursus tristique. Mauris faucibus luctus sem. Donec ante ante, pretium vel varius non, pellentesque id eros. Nunc faucibus pharetra lacus in accumsan. Nunc imperdiet viverra enim quis venenatis. Praesent non sem ac leo molestie euismod. Suspendisse mattis dui a risus egestas eleifend."]},rent:{markup:function(e){return`<p class="price__delivery">${e}</p>`},data:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a posuere mi. Morbi imperdiet felis id vulputate rhoncus. Curabitur pellentesque cursus gravida. Curabitur ornare dignissim mauris at hendrerit. Duis ut cursus arcu. Duis laoreet dui ac ultrices congue. Suspendisse lacus lacus, vulputate a eleifend ac, gravida nec tortor. Morbi at sagittis tortor. Sed egestas cursus accumsan. In et metus luctus, accumsan leo vitae, tincidunt sapien.","Donec at orci a risus aliquet aliquet. Aliquam rutrum est sit amet eleifend porta. Sed in erat metus. Nam tristique volutpat purus eget ornare. Phasellus ultrices turpis nec condimentum dapibus. Suspendisse id est at sem efficitur placerat ut vitae leo. Aenean consectetur pulvinar mollis. Sed ac sodales orci. Ut scelerisque nulla sit amet consectetur commodo. Vivamus nec velit ut eros dignissim consequat. Suspendisse elementum dolor sed purus rhoncus mollis. Nullam laoreet ligula urna, non ultricies tortor posuere at. Pellentesque aliquet nunc nec lorem commodo porttitor et nec ipsum. Sed eget diam sodales, rutrum lorem eu, molestie erat.","Suspendisse pellentesque felis vitae sapien interdum, ut tincidunt est porttitor. Nam purus leo, vulputate eu tincidunt vel, placerat in eros. Nam et lobortis arcu. Nulla augue urna, placerat in felis nec, tempor mollis tellus. Sed hendrerit diam ligula, ac molestie diam euismod eu. Nulla sem justo, faucibus in sagittis ut, maximus eu lorem. Ut ut tortor hendrerit, tempus neque vitae, pharetra tellus. Duis mattis mauris at justo cursus tristique. Mauris faucibus luctus sem. Donec ante ante, pretium vel varius non, pellentesque id eros. Nunc faucibus pharetra lacus in accumsan. Nunc imperdiet viverra enim quis venenatis. Praesent non sem ac leo molestie euismod. Suspendisse mattis dui a risus egestas eleifend."]},grout:{markupHeader:'<li class="price__item price__item_head">\n        <div class="price__item-wrap">\n            <span class="price__name price__name_head">Наименование</span>\n            <span class="price__price price__price_head">Цена</span>\n        </div>\n    </li>',markup:'<li class="price__item">\n        <div class="price__img-wrap">\n            <img src="./img/sales.png" alt="" class="price__imgprice__sales">\n            <img src="./img/hit.png" alt="" class="price__img price__hit">\n        </div>\n        <div class="price__item-wrap">\n            <span class="price__name">Бетон В 22.5 М 300</span>\n            <span class="price__price">3 450 руб / м3 </span>\n        </div>\n        <button type="button" class="price__btn">\n            <span>Подробнее</span>\n            <img src="./img/arrow-btn-header.png" alt="" />\n        </button>\n    </li>',data:[{name:"Бетон В 22.5 М 300",price:"3 450 руб / м3"},{name:"Бетон В 22.5 М 300",price:"3 450 руб / м3"},{name:"Бетон В 22.5 М 300",price:"3 450 руб / м3"}]},concrete:{markupHeader:'<li class="price__item price__item_head">\n        <div class="price__item-wrap">\n            <span class="price__name price__name_head">Наименование</span>\n            <span class="price__price price__price_head">Цена</span>\n        </div>\n    </li>',markup:function(e){return`<li class="price__item">\n        <div class="price__img-wrap">\n            <img src="./img/sales.png" alt="" class="price__imgprice__sales">\n            <img src="./img/hit.png" alt="" class="price__img price__hit">\n        </div>\n        <div class="price__item-wrap">\n            <span class="price__name">${e.name}</span>\n            <span class="price__price">${e.price}</span>\n        </div>\n        <button type="button" class="price__btn">\n            <span>Подробнее</span>\n            <img src="./img/arrow-btn-header.png" alt="" />\n        </button>\n    </li>`},data:[{name:"Бетон В 22.5 М 300",price:"3 450 руб / м3"},{name:"Бетон В 22.5 М 300",price:"3 450 руб / м3"},{name:"Бетон В 22.5 М 300",price:"3 450 руб / м3"}]},grout:{markupHeader:'<li class="price__item price__item_head">\n        <div class="price__item-wrap">\n            <span class="price__name price__name_head">Наименование</span>\n            <span class="price__price price__price_head">Цена</span>\n        </div>\n    </li>',markup:function(e){return`<li class="price__item">\n        <div class="price__img-wrap">\n            <img src="./img/sales.png" alt="" class="price__imgprice__sales">\n            <img src="./img/hit.png" alt="" class="price__img price__hit">\n        </div>\n        <div class="price__item-wrap">\n            <span class="price__name">${e.name}</span>\n            <span class="price__price">${e.price}</span>\n        </div>\n        <button type="button" class="price__btn" data-type="callback">\n            <span>Подробнее</span>\n            <img src="./img/arrow-btn-header.png" alt="" />\n        </button>\n    </li>`},data:[{name:"Бетон В 22.5 М 300",price:"3 450 руб / м3"},{name:"Бетон В 22.5 М 300",price:"3 450 руб / м3"},{name:"Бетон В 22.5 М 300",price:"3 450 руб / м3"}]}};q.setActiveTabAndShowContent=function(){N.on("click",function(e){let t=$(e.target);var a;"LI"==t.prop("tagName")&&(a=t,$(this).find(".tabs__item_active").removeClass("tabs__item_active"),a.addClass("tabs__item_active"),function(e){let t=e.attr("data-tab");a=D[t],r=$(".price__list"),r.find(".price__item").each(function(e){$(this).addClass("price__item_inactive")}),r.find(".price__delivery").each(function(e){$(this).addClass("price__delivery_inactive")}),setTimeout(()=>{if(r.empty(),a.markupHeader)return r.append(a.markupHeader),void a.data.forEach(e=>{r.append(a.markup(e))});a.data.forEach(e=>{r.append(a.markup(e))})},500);var a,r}(t),M(S))})};$(".price__item");q.showAndHideTooltip=function(){$(window).width()>=1200?E.hover(function(e){$(".price__item").hover(function(e){!function(e,t){if(e.hasClass("price__item_head"))return;t.hasClass("tooltip_active")&&(t.removeClass("tooltip_active"),t.find(".tooltip__text_normal").empty());t.find(".tooltip__text_normal").text(L.content),t.css("left",e.position().left-t.width()-50+"px"),t.css("top",e.position().top+"px"),t.addClass("tooltip_active")}($(e.target),S)},function(){M(S)})},function(){M(S)}):q.showTooltipOnMobile()};let L={content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere lacinia ex, vel\n  ullamcorper leo consequat eu. Donec auctor odio sem"};function M(e){for(let t=0;t<10&&e.hasClass("tooltip_active");t++)e.removeClass("tooltip_active"),e.find(".tooltip__text_normal").empty()}q.closeTooltipByClick=function(){A.on("click",function(e){$(this).parent().removeClass("tooltip_active")})},q.showTooltipOnMobile=function(){$(window).width()>=1200||E.on("click",function(e){let t=$(e.target);t.hasClass(".price__item")||(t=t.closest(".price__item")),$(this).find(".tooltip_active")&&M(S),function(e,t){t.hasClass("price__item_head")||(e.find(".tooltip__text_normal").text(L.content),e.css("left",t.position().left+t.width()/2-e.width()/2-50+"px"),e.css("top",t.position().top+25+"px"),e.addClass("tooltip_active"))}(S,t)})};let H={};H.CustomSelect=function(e){var t=e.elem;t.onclick=function(e){"order-form__select-title"==e.target.className?a?i():(t.classList.add("open"),document.addEventListener("click",r),a=!0):"LI"==e.target.tagName&&(!function(e,a){t.querySelector(".order-form__select-title span").innerHTML=e,$(".order-form__hidden-value").val(e);var r=new CustomEvent("select",{bubbles:!0,detail:{title:e,value:a}});t.dispatchEvent(r)}(e.target.innerHTML,e.target.dataset.value),i())};var a=!1;function r(e){t.contains(e.target)||i()}function i(){t.classList.remove("open"),document.removeEventListener("click",r),a=!1}};let F=$(".price__list"),I=$(".overlay_order"),U=$(".popup_order"),O=$(".popup__close_order"),P=$("#orderForm");function X(){I.css("transform","translateX(-100vw)"),I.removeClass("overlay_active"),$(".order-form__choice").text(""),$(".order-form__price").text("")}H.showModal=function(){F.on("click",e=>{if("BUTTON"==$(e.target).prop("tagName")||"BUTTON"==$(e.target).parent().prop("tagName")){let t=$(e.target).closest(".price__item"),a=t.find(".price__name").text(),r=t.find(".price__price").text();$(".order-form__choice").text(a),$(".order-form__price").text(r),function(){let e=$(window).scrollTop()+$(window).height()/2-U.height()/2;I.addClass("overlay_active"),U.css("transform",`translateY(${e}px)`),I.css("transform","translateX(0)")}()}}),l.recoveryForm(O,P,X)},O.on("click",X);const B=$(".order-form__label_rent"),R=$(".order-form__label_snow");function j(e,t){if(e.hasClass(t))return e.parent().find("input").attr("checked",!1),void e.removeClass(t);e.parent().find("input").attr("checked",!0),e.addClass(t)}H.setAttrChecked=function(){B.on("click",function(){j($(this),"order-form__label_rent-active")}),R.on("click",function(){j($(this),"order-form__label_snow-active")})};let Y=$(".order-form__radio-label");H.setCheckedAttrForRadio=function(){let e=null;Y.on("click",function(t){e&&(e.removeClass("order-form__radio_active"),e.parent().find("input").attr("checked",!1)),$(t.target).parent().find("input").attr("checked",!0),$(t.target).addClass("order-form__radio_active"),e=$(t.target)})},e.on("click",function(){!function(e,t,a,r,i){if(e.hasClass("burger_closed"))return t.animate(),a.animate({opacity:0},{duration:100}),r.animate(),i.addClass("header__menu_open"),void e.animate().removeClass("burger_closed").addClass("burger_opened");e.hasClass("burger_opened")&&(t.animate(),a.animate({opacity:1}),r.animate(),i.removeClass("header__menu_open"),e.animate().removeClass("burger_opened").addClass("burger_closed"))}($(this),t,a,r,i)});const V=$(".header__contacts-expand");$(".header__tel-btn").on("click",function(e){if(e.preventDefault(),$(this).hasClass("header__tel-btn_active"))return V.slideUp(),void setTimeout(()=>{V.empty(),$(this).removeClass("header__tel-btn_active")},300);$(this).addClass("header__tel-btn_active"),s.showAddNumbers(V,s.numbers)});let z,G={loop:!0,items:1,dots:!0,dotsClass:"header__bullets",dotClass:"header__bullet",navContainerClass:"arrows arrows_header",navClass:["arrow arrow_prev arrow_prev--header","arrow arrow_next arrow_next--header"],responsive:{0:{nav:!1},1200:{nav:!0}}},J=$(".header .owl-carousel");$(".header__slides").on("click",e=>{let t=$(e.target);return t.hasClass("arrow_prev--header")?(window.clearTimeout(z),void(z=setTimeout(function e(){J.trigger("prev.owl.carousel"),z=setTimeout(e,2e3)},2e3))):t.hasClass("arrow_next--header")?(window.clearTimeout(z),z=setTimeout(function e(){J.trigger("next.owl.carousel"),z=setTimeout(e,2e3)},2e3),void(ee="ltr")):void 0}),setTimeout(()=>{$(".header__slide_sec").css("display","flex"),J.owlCarousel(G),z=setTimeout(function e(){J.trigger("next.owl.carousel"),z=setTimeout(e,2e3)},2e3)},1e3),n.on("click",function(e){let t=$(e.target);if(!t.closest(".questions__wrap"))return;let a=(t=t.closest(".questions__wrap")).parent();if(o&&o.attr("data-num")==a.attr("data-num"))return o.find(".questions__describe").slideUp("slow"),t.removeClass("questions__wrap_open"),void(o=null);o&&(o.find(".questions__describe").slideUp("slow"),o.find(".questions__wrap_open").removeClass("questions__wrap_open")),t.addClass("questions__wrap_open"),a.find(".questions__describe").slideDown(""),o=a});let K,Q=$(".cert .owl-carousel");function W(){window.clearTimeout(K),K=setTimeout(function e(){Q.trigger("prev.owl.carousel"),K=setTimeout(e,1e3)},1e3)}function Z(){window.clearTimeout(K),K=setTimeout(function e(){Q.trigger("next.owl.carousel"),K=setTimeout(e,1e3)},1e3)}Q.owlCarousel({loop:!0,margin:10,dots:!0,dotsClass:"cert__dots",dotClass:"cert__dot",navContainerClass:"arrows",navClass:["arrow arrow_prev","arrow arrow_next"],responsive:{0:{items:1,nav:!1},768:{items:2},1024:{items:3,nav:!0},1200:{items:4,nav:!0}}}),K=setTimeout(function e(){Q.trigger("next.owl.carousel"),K=setTimeout(e,1e3)},1e3);let ee="ltr";$(".cert__list").on("click",e=>{let t=$(e.target);return t.hasClass("arrow_prev")?(W(),void(ee="rtl")):t.hasClass("arrow_next")?(Z(),void(ee="ltr")):void("IMG"==t.prop("tagName")&&clearTimeout(K))}),$('[data-fancybox="gallery"]').fancybox({loop:!0,arrows:!0,infobar:!0,buttons:["close"],btnTpl:{close:'<button data-fancybox-close class="fancybox-button fancybox-button--close cert__close" title="{{CLOSE}}"></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left cert__gallery-arrow cert__gallery-arrow_prev" title="{{PREV}}"></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right cert__gallery-arrow cert__gallery-arrow_next" title="{{NEXT}}"></button>'},afterClose:function(){"ltr"!=ee?W():Z()}}),$(".delivery__agree").on("click",function(){if($(this).hasClass("delivery__agree_active"))return $(this).parent().find("input").attr("checked",!1),void $(this).removeClass("delivery__agree_active");$(this).parent().find("input").attr("checked",!0),$(this).addClass("delivery__agree_active")}),p.btnHandler($(".delivery__btn"),$(".delivery__name"),$(".delivery__phone"),"/post-delivery"),p.addError($(".delivery__name")),p.removeErr($(".delivery__name")),p.addError($(".delivery__phone")),p.removeErr($(".delivery__phone"));let te=$(".about__gallery-item-clone"),ae=[];$(".about__img").each(function(e){ae.push($(this).attr("src"))});let re=$(".about__img")[1].getAttribute("src");var ie;ie=re,te.append(function(e){return`<img src="${e}" alt="" class="about__img-clone" />`}(ie));let se=$(".about .owl-carousel");se.owlCarousel({loop:!0,margin:100,dots:!1,navContainerClass:"arrows arrows_about",navClass:["arrow arrow_prev arrow_prev--about","arrow arrow_next"],items:1,animateOut:"slideOutLeft",animateIn:"fadeIn",onInitialized:function(e){$(".about__slider-num").text("1 / "+this.items().length)}});let ne=$(".about__img-clone");se.on("drag.owl.carousel",e=>{let t=$(e.target).find(".owl-item.active").next().next().find("img").attr("src");setTimeout(()=>{ne.attr("src",t)},500)});let oe=$(".about__img");se.on("changed.owl.carousel",function(e){let t=$(".about__slider-num");e.item.index-1==0?t.text(`${e.item.count}/${e.item.count}`):t.text(e.item.index-1+"/"+e.item.count);let a=oe[e.item.index+1];a=a.getAttribute("src"),ne.attr("src",a),ne.css("opacity",0),setTimeout(()=>{ne.css("opacity",1)},300)}),_.each(function(e){$(this).on("click",g)}),l.recoveryForm(f,b,h),T.on("click",e=>{let t=$(e.target);"A"==t.prop("tagName")&&e.preventDefault();let a=t.attr("data-scroll"),r=$(`.${a}`).offset().top;$("html, body").animate({scrollTop:r},500),w.hasClass("burger_opened")&&(C.animate(),y.animate({opacity:1}),k.animate(),x.removeClass("header__menu_open"),w.animate().removeClass("burger_opened").addClass("burger_closed"))}),q.setActiveTabAndShowContent(),q.showAndHideTooltip(),q.closeTooltipByClick(),$(window).width()<1200&&q.showTooltipOnMobile(),new H.CustomSelect({elem:document.getElementById("district-select")}),H.showModal(),H.setAttrChecked(),H.setCheckedAttrForRadio(),H.setCheckedAttrForRadio(),p.btnHandler($(".order-form__btn"),$("#user-order-name"),$("#user-order-tel"),"/post-order"),p.addError($("#user-order-name")),p.removeErr($("#user-order-name")),p.addError($("#user-order-tel")),p.removeErr($("#user-order-tel")),p.btnHandler($(".callback-form__btn"),$(".callback-form__input_name"),$("#user-tel"),"/post"),p.addError($(".callback-form__input_name")),p.removeErr($(".callback-form__input_name")),p.addError($("#user-tel")),p.removeErr($("#user-tel"))}();