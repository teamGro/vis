(function () {
    'use strict';

    function burgerHandler(burgerElem, btnTopElem, btnMiddleElem, btnBottomElem, mobileMenu) {
        if (burgerElem.hasClass('burger_closed')) {
            btnTopElem.animate();
            btnMiddleElem.animate(
                {
                    opacity: 0,
                },
                {
                    duration: 100,
                }
            );
            btnBottomElem.animate();

            mobileMenu.addClass('header__menu_open');
            //sliderElem.pause();

            burgerElem.animate().removeClass('burger_closed').addClass('burger_opened');

            return;
        }

        if (burgerElem.hasClass('burger_opened')) {
            btnTopElem.animate();
            btnMiddleElem.animate({
                opacity: 1,
            });
            btnBottomElem.animate();

            mobileMenu.removeClass('header__menu_open');
            //sliderElem.play();

            burgerElem.animate().removeClass('burger_opened').addClass('burger_closed');

            return;
        }
    }

    let phoneNumsHandler = {};

    phoneNumsHandler.numbers = [
        {
            href: '+79044027952',
            num: '8 904 402 79 52'
        }
    ];


    phoneNumsHandler.showAddNumbers = function (parent, data) {
        function markup(item) {
            return `
    <a class="header__tel header__tel_add" href="tel:${item.href}">
        <span class="header__tel-num">${item.num}</span>
    </a>`;
        }

        for (let i = 0; i < data.length; i++) {
            console.log(parent);
            parent.append(markup(data[i]));
        }

        parent.slideDown();

    };

    // slider.headerSlider = new Glide('.glide', {

    let btnModalTrigger$1 = $('[data-type="callback"]');
    let modalContainer = $('.overlay_callback');
    let modal = $('.popup_calback');
    let btnModalClose = $('.popup__close');

    function getModalCoordsAndShow() {
        let topScroll = $(window).scrollTop() + $(window).height() / 2 - modal.height() / 2;
        modalContainer.addClass('overlay_active');
        modal.css('transform', `translateY(${topScroll}px)`);
        modalContainer.css('transform', 'translateX(0)');
    }

    function hideModal() {
        modalContainer.css('transform', 'translateX(-100vw)');
        modalContainer.removeClass('overlay_active');
    }

    function showOrHideModal() {
        if (modalContainer.hasClass('overlay_active')) {
            hideModal();
            return;
        }

        getModalCoordsAndShow();
    }

    function btnModalHandler() {
        btnModalTrigger$1.each(function (i) {
            $(this).on('click', showOrHideModal);
        });
        modalCloseByClick$1();
    }

    function modalCloseByClick$1() {
        console.log(1);
        btnModalClose.on('click', hideModal);
    }

    const btnBurger = $('.burger');
    const btnTopElem = $('.burger__elem_top');
    const btnMiddleElem = $('.burger__elem_middle');
    const btnBottomElem = $('.burger__elem_bottom');
    const mobileMenu = $('.header__menu');

    let navs = $('.navigation__list');

    function scrollToNavElem() {
        navs.on("click", (e) => {
            let target = $(e.target);
            if (target.prop("tagName") == "A") e.preventDefault();
            let scrollName = target.attr("data-scroll");
            let scrollElem = $(`.${scrollName}`);
            let scrollTop = scrollElem.offset().top;

            $('html, body').animate({
                scrollTop: scrollTop
            }, 500);
            closeMenuIfNeeded();
        });
    }

    function closeMenuIfNeeded() {
        if (btnBurger.hasClass('burger_opened')) {
            btnTopElem.animate();
            btnMiddleElem.animate({
                opacity: 1,
            });
            btnBottomElem.animate();

            mobileMenu.removeClass('header__menu_open');
            //sliderElem.play();

            btnBurger.animate().removeClass('burger_opened').addClass('burger_closed');

            return;
        }
    }

    let price = {};

    const tabs = $('.tabs');
    const tooltip = $('.tooltip');
    const itemsContainer = $('.price__list');
    const tooltipCloseBtn = $('.tooltip__close');

    let markup = {
      delivery: {
        markup: function (data) {
          return `<p class="price__delivery">${data}</p>`;
        },
        data: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a posuere mi. Morbi imperdiet felis id vulputate rhoncus. Curabitur pellentesque cursus gravida. Curabitur ornare dignissim mauris at hendrerit. Duis ut cursus arcu. Duis laoreet dui ac ultrices congue. Suspendisse lacus lacus, vulputate a eleifend ac, gravida nec tortor. Morbi at sagittis tortor. Sed egestas cursus accumsan. In et metus luctus, accumsan leo vitae, tincidunt sapien.`,
          `Donec at orci a risus aliquet aliquet. Aliquam rutrum est sit amet eleifend porta. Sed in erat metus. Nam tristique volutpat purus eget ornare. Phasellus ultrices turpis nec condimentum dapibus. Suspendisse id est at sem efficitur placerat ut vitae leo. Aenean consectetur pulvinar mollis. Sed ac sodales orci. Ut scelerisque nulla sit amet consectetur commodo. Vivamus nec velit ut eros dignissim consequat. Suspendisse elementum dolor sed purus rhoncus mollis. Nullam laoreet ligula urna, non ultricies tortor posuere at. Pellentesque aliquet nunc nec lorem commodo porttitor et nec ipsum. Sed eget diam sodales, rutrum lorem eu, molestie erat.`,
          `Suspendisse pellentesque felis vitae sapien interdum, ut tincidunt est porttitor. Nam purus leo, vulputate eu tincidunt vel, placerat in eros. Nam et lobortis arcu. Nulla augue urna, placerat in felis nec, tempor mollis tellus. Sed hendrerit diam ligula, ac molestie diam euismod eu. Nulla sem justo, faucibus in sagittis ut, maximus eu lorem. Ut ut tortor hendrerit, tempus neque vitae, pharetra tellus. Duis mattis mauris at justo cursus tristique. Mauris faucibus luctus sem. Donec ante ante, pretium vel varius non, pellentesque id eros. Nunc faucibus pharetra lacus in accumsan. Nunc imperdiet viverra enim quis venenatis. Praesent non sem ac leo molestie euismod. Suspendisse mattis dui a risus egestas eleifend.`,
        ],
      },
      rent: {
        markup: function (data) {
          return `<p class="price__delivery">${data}</p>`;
        },
        data: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a posuere mi. Morbi imperdiet felis id vulputate rhoncus. Curabitur pellentesque cursus gravida. Curabitur ornare dignissim mauris at hendrerit. Duis ut cursus arcu. Duis laoreet dui ac ultrices congue. Suspendisse lacus lacus, vulputate a eleifend ac, gravida nec tortor. Morbi at sagittis tortor. Sed egestas cursus accumsan. In et metus luctus, accumsan leo vitae, tincidunt sapien.`,
          `Donec at orci a risus aliquet aliquet. Aliquam rutrum est sit amet eleifend porta. Sed in erat metus. Nam tristique volutpat purus eget ornare. Phasellus ultrices turpis nec condimentum dapibus. Suspendisse id est at sem efficitur placerat ut vitae leo. Aenean consectetur pulvinar mollis. Sed ac sodales orci. Ut scelerisque nulla sit amet consectetur commodo. Vivamus nec velit ut eros dignissim consequat. Suspendisse elementum dolor sed purus rhoncus mollis. Nullam laoreet ligula urna, non ultricies tortor posuere at. Pellentesque aliquet nunc nec lorem commodo porttitor et nec ipsum. Sed eget diam sodales, rutrum lorem eu, molestie erat.`,
          `Suspendisse pellentesque felis vitae sapien interdum, ut tincidunt est porttitor. Nam purus leo, vulputate eu tincidunt vel, placerat in eros. Nam et lobortis arcu. Nulla augue urna, placerat in felis nec, tempor mollis tellus. Sed hendrerit diam ligula, ac molestie diam euismod eu. Nulla sem justo, faucibus in sagittis ut, maximus eu lorem. Ut ut tortor hendrerit, tempus neque vitae, pharetra tellus. Duis mattis mauris at justo cursus tristique. Mauris faucibus luctus sem. Donec ante ante, pretium vel varius non, pellentesque id eros. Nunc faucibus pharetra lacus in accumsan. Nunc imperdiet viverra enim quis venenatis. Praesent non sem ac leo molestie euismod. Suspendisse mattis dui a risus egestas eleifend.`,
        ],
      },
      grout: {
        markupHeader: `<li class="price__item price__item_head">
        <div class="price__item-wrap">
            <span class="price__name price__name_head">Наименование</span>
            <span class="price__price price__price_head">Цена</span>
        </div>
    </li>`,
        markup: `<li class="price__item">
        <div class="price__img-wrap">
            <img src="./img/sales.png" alt="" class="price__imgprice__sales">
            <img src="./img/hit.png" alt="" class="price__img price__hit">
        </div>
        <div class="price__item-wrap">
            <span class="price__name">Бетон В 22.5 М 300</span>
            <span class="price__price">3 450 руб / м3 </span>
        </div>
        <button type="button" class="price__btn">
            <span>Подробнее</span>
            <img src="./img/arrow-btn-header.png" alt="" />
        </button>
    </li>`,
        data: [
          { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
          { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
          { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
        ],
      },
      concrete: {
        markupHeader: `<li class="price__item price__item_head">
        <div class="price__item-wrap">
            <span class="price__name price__name_head">Наименование</span>
            <span class="price__price price__price_head">Цена</span>
        </div>
    </li>`,
        markup: function (data) {
          return `<li class="price__item">
        <div class="price__img-wrap">
            <img src="./img/sales.png" alt="" class="price__imgprice__sales">
            <img src="./img/hit.png" alt="" class="price__img price__hit">
        </div>
        <div class="price__item-wrap">
            <span class="price__name">${data.name}</span>
            <span class="price__price">${data.price}</span>
        </div>
        <button type="button" class="price__btn">
            <span>Подробнее</span>
            <img src="./img/arrow-btn-header.png" alt="" />
        </button>
    </li>`;
        },
        data: [
          { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
          { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
          { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
        ],
      },
      grout: {
        markupHeader: `<li class="price__item price__item_head">
        <div class="price__item-wrap">
            <span class="price__name price__name_head">Наименование</span>
            <span class="price__price price__price_head">Цена</span>
        </div>
    </li>`,
        markup: function (data) {
          return `<li class="price__item">
        <div class="price__img-wrap">
            <img src="./img/sales.png" alt="" class="price__imgprice__sales">
            <img src="./img/hit.png" alt="" class="price__img price__hit">
        </div>
        <div class="price__item-wrap">
            <span class="price__name">${data.name}</span>
            <span class="price__price">${data.price}</span>
        </div>
        <button type="button" class="price__btn" data-type="callback">
            <span>Подробнее</span>
            <img src="./img/arrow-btn-header.png" alt="" />
        </button>
    </li>`;
        },
        data: [
          { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
          { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
          { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
        ],
      },
    };

    price.setActiveTabAndShowContent = function () {
      tabs.on('click', function (e) {
        let $target = $(e.target);
        if ($target.prop('tagName') != 'LI') return;

        setActiveTab($target, $(this));
        showContent($target);
      });
    };

    function setActiveTab(target, parent) {
      parent.find('.tabs__item_active').removeClass('tabs__item_active');
      target.addClass('tabs__item_active');
    }

    function createMarkup(data, parent) {
      parent.find('.price__item').each(function (i) {
        $(this).addClass('price__item_inactive');
      });

      parent.find('.price__delivery').each(function (i) {
        $(this).addClass('price__delivery_inactive');
      });

      setTimeout(() => {
        parent.empty();
        if (data.markupHeader) {
          parent.append(data.markupHeader);
          data.data.forEach((item) => {
            parent.append(data.markup(item));
          });

          return;
        }

        data.data.forEach((item) => {
          parent.append(data.markup(item));
        });
      }, 500);
    }

    function showContent(target) {
      let attr = target.attr('data-tab');
      createMarkup(markup[attr], $('.price__list'));
    }

    let itemPrice = $('.price__item');
    price.showAndHideTooltip = function () {
      itemPrice.hover(
        function (e) {
          console.log($(e.target));
          showTooltip($(e.target), tooltip);
        },
        function (e) {
          console.log(2);
          hideTooltip(tooltip);
        }
      );
      // itemsContainer.each(function (i) {
      //   $(this).on('click', (e) => {
      //     let $target = $(e.target);
      //     $target = $target.closest('.price__item');
      //     showTooltip($target, tooltip);
      //   });

      //   $(this).on('mouseenter', (e) => {
      //     let $target = $(e.target);
      //     $target = $target.closest('.price__item');
      //     showTooltip($target, tooltip);
      //   });
      //   $(this).on('mouseout', function (e) {
      //     let $target = $(e.target);
      //     hideTooltip()
      //   });

      // });
    };

    let tooltipContent = {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere lacinia ex, vel
  ullamcorper leo consequat eu. Donec auctor odio sem`
    };


    function hideTooltip(tooltip) {
      tooltip.removeClass('tooltip_active');
      tooltip.find('.tooltip__text_normal').empty();


    }



    function showTooltip(target, tooltip) {
      if (tooltip.hasClass('tooltip_active')) {
        tooltip.removeClass('tooltip_active');
        tooltip.find('.tooltip__text_normal').empty();
      }

      //let tooltipHeight = ;
      console.log(target.position());
      let targetPosition = target.offset().top - tooltip.height() - target.height();//
      //console.log(tooltipHeight)
      //console.log(targetPosition)
      tooltip.find('.tooltip__text_normal').text(tooltipContent.content);

      tooltip.css('left', target.position().left - tooltip.width() - 50 + 'px');
      tooltip.css('top', target.position().top + 'px');

      setTimeout(() => {
        tooltip.addClass('tooltip_active');

      }, 500);
    }

    price.closeTooltipByClick = function () {
      tooltipCloseBtn.on('click', (e) => {
        $(e.target).parent().removeClass('tooltip_active');
      });
    };

    let orderHandler = {};
    // var animalSelect = new CustomSelect({
    //     elem: document.getElementById("district-select"),
    // });

    orderHandler.CustomSelect = function (options) {
        var elem = options.elem;

        elem.onclick = function (event) {
            if (event.target.className == "order-form__select-title") {
                toggle();
            } else if (event.target.tagName == "LI") {
                setValue(event.target.innerHTML, event.target.dataset.value);
                close();
            }
        };

        var isOpen = false;

        // ------ обработчики ------

        // закрыть селект, если клик вне его
        function onDocumentClick(event) {
            if (!elem.contains(event.target)) close();
        }

        // ------------------------

        function setValue(title, value) {
            elem.querySelector(".order-form__select-title").innerHTML = title;

            var widgetEvent = new CustomEvent("select", {
                bubbles: true,
                detail: {
                    title: title,
                    value: value,
                },
            });

            elem.dispatchEvent(widgetEvent);
        }

        function toggle() {
            if (isOpen) close();
            else open();
        }

        function open() {
            elem.classList.add("open");
            document.addEventListener("click", onDocumentClick);
            isOpen = true;
        }

        function close() {
            elem.classList.remove("open");
            document.removeEventListener("click", onDocumentClick);
            isOpen = false;
        }
    };

    let priceList = $(".price__list");
    let priceBtn = $(".price__btn");
    let orderModalContainer = $(".overlay_order");
    let orderModal = $(".popup_order");
    let btnModalClose$1 = $(".popup__close_order");

    orderHandler.showModal = function () {
        priceList.on("click", (e) => {
            console.log($(e.target).prop("tagName"), $(e.target).parent());
            if ($(e.target).prop("tagName") == "BUTTON" || $(e.target).parent().prop("tagName") == "BUTTON") {
                let elem = $(e.target).closest(".price__item");
                let name = elem.find(".price__name").text();
                let price = elem.find(".price__price").text();
                $(".order-form__choice").text(name);
                $(".order-form__price").text(price);
                getModalCoordsAndShow$1();
            }
            return;
        });

        btnModalClose$1.on("click", hideModal$1);
    };


    function getModalCoordsAndShow$1() {
        let topScroll = $(window).scrollTop() + $(window).height() / 2 - orderModal.height() / 2;
        orderModalContainer.addClass("overlay_active");
        orderModal.css("transform", `translateY(${topScroll}px)`);
        orderModalContainer.css("transform", "translateX(0)");
    }

    function hideModal$1() {
        orderModalContainer.css("transform", "translateX(-100vw)");
        orderModalContainer.removeClass("overlay_active");
        $(".order-form__choice").text("");
        $(".order-form__price").text("");
    }

    btnModalClose$1.on("click", hideModal$1);


    const labelRent = $('.order-form__label_rent');
    const labelSnow = $('.order-form__label_snow');

    orderHandler.setAttrChecked = function () {
        labelRent.on('click', function () {
            setNameAttrForElem($(this), 'order-form__label_rent-active');
        });

        labelSnow.on('click', function () {
            setNameAttrForElem($(this), 'order-form__label_snow-active');
        });
    };

    function setNameAttrForElem(elem, clsNameActive) {
        if (elem.hasClass(clsNameActive)) {
            elem.parent().find('input').attr('checked', false);
            elem.removeClass(clsNameActive);
            return;
        }
        elem.parent().find('input').attr('checked', true);
        elem.addClass(clsNameActive);
    }

    let radioElems = $('.order-form__radio-label');
    orderHandler.setCheckedAttrForRadio = function () {
        let currentChecked = null;
        radioElems.on('click', function (e) {

            if (currentChecked) {
                console.log(currentChecked);
                currentChecked.removeClass('order-form__radio_active');
                currentChecked.parent().find('input').attr('checked', false);
            }
            $(e.target).parent().find('input').attr('checked', true);
            $(e.target).addClass('order-form__radio_active');
            currentChecked = $(e.target);

        });
    };

    const btnBurger$1 = $('.burger');
    const btnTopElem$1 = $('.burger__elem_top');
    const btnMiddleElem$1 = $('.burger__elem_middle');
    const btnBottomElem$1 = $('.burger__elem_bottom');
    const mobileMenu$1 = $('.header__menu');

    btnBurger$1.on('click', function () {
      burgerHandler($(this), btnTopElem$1, btnMiddleElem$1, btnBottomElem$1, mobileMenu$1);
    });

    const telContainer = $('.header__contacts-expand');
    const expandPhoneBtn = $('.header__tel-btn');
    expandPhoneBtn.on('click', function (e) {
      e.preventDefault();

      if ($(this).hasClass('header__tel-btn_active')) {
        telContainer.slideUp();
        telContainer.empty();
        $(this).removeClass('header__tel-btn_active');
        return;
      }

      $(this).addClass('header__tel-btn_active');
      phoneNumsHandler.showAddNumbers(telContainer, phoneNumsHandler.numbers);
    });

    let headerSliderSettings = {
      loop: true,
      items: 1,
      dots: true,
      dotsClass: 'header__bullets',
      dotClass: 'header__bullet',
      navContainerClass: 'arrows arrows_header',
      navClass: ['arrow arrow_prev arrow_prev--header', 'arrow arrow_next arrow_next--header'],
      responsive: {
        0: {
          nav: false,
        },
        1200: {
          nav: true,
        },
      },
    };
    let headerTimerID;
    let headerSlider = $('.header .owl-carousel');
    function setRtlHeader() {
      window.clearTimeout(headerTimerID);
      headerTimerID = setTimeout(function f() {
        headerSlider.trigger('prev.owl.carousel');
        headerTimerID = setTimeout(f, 2000);
      }, 2000);
    }

    function setLtrHeader() {
      window.clearTimeout(headerTimerID);
      headerTimerID = setTimeout(function f() {
        headerSlider.trigger('next.owl.carousel');
        headerTimerID = setTimeout(f, 2000);
      }, 2000);
    }

    $('.header__slides').on('click', (e) => {
      let target = $(e.target);

      if (target.hasClass('arrow_prev--header')) {
        console.log(1);
        setRtlHeader();
        certSliderDirection = 'rtl';
        return;
      }

      if (target.hasClass('arrow_next--header')) {
        console.log(12);
        setLtrHeader();
        certSliderDirection = 'ltr';
        return;
      }

      if (target.prop('tagName') == 'IMG') {
        clearTimeout(timer);
      }
    });

    setTimeout(() => {
      $('.header__slide_sec').css('display', 'flex');
      headerSlider.owlCarousel(headerSliderSettings);
      headerTimerID = setTimeout(function startMoveLtr() {
        headerSlider.trigger('next.owl.carousel');
        headerTimerID = setTimeout(startMoveLtr, 2000);
      }, 2000);
    }, 1000);

    const questionsList = $('.questions__list');
    let activeQuestion = null;
    questionsList.on('click', function (e) {
      let $target = $(e.target);
      if (!$target.closest('.questions__wrap')) return;

      $target = $target.closest('.questions__wrap');
      let $parent = $target.parent();

      if (activeQuestion && activeQuestion.attr('data-num') == $parent.attr('data-num')) {
        activeQuestion.find('.questions__describe').slideUp('slow');
        $target.removeClass('questions__wrap_open');
        activeQuestion = null;
        return;
      }

      if (activeQuestion) {
        activeQuestion.find('.questions__describe').slideUp('slow');
        activeQuestion.find('.questions__wrap_open').removeClass('questions__wrap_open');
      }

      setTimeout(() => {
        $target.addClass('questions__wrap_open');
        $parent.find('.questions__describe').slideDown('slow');
        activeQuestion = $parent;
      }, 300);
    });

    let sertSlider = $('.cert .owl-carousel');
    sertSlider.owlCarousel({
      loop: true,
      margin: 10,
      dots: true,
      dotsClass: 'cert__dots',
      dotClass: 'cert__dot',
      navContainerClass: 'arrows',
      navClass: ['arrow arrow_prev', 'arrow arrow_next'],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
          nav: true,
        },
        1200: {
          items: 4,
          nav: true,
        },
      },
    });
    let timer;

    timer = setTimeout(function startMoveLtr() {
      sertSlider.trigger('next.owl.carousel');
      timer = setTimeout(startMoveLtr, 1000);
    }, 1000);

    function setRtl() {
      window.clearTimeout(timer);
      timer = setTimeout(function f() {
        sertSlider.trigger('prev.owl.carousel');
        timer = setTimeout(f, 1000);
      }, 1000);
    }

    function setLtr() {
      window.clearTimeout(timer);
      timer = setTimeout(function f() {
        sertSlider.trigger('next.owl.carousel');
        timer = setTimeout(f, 1000);
      }, 1000);
    }

    let certSliderDirection = 'ltr';
    $('.cert__list').on('click', (e) => {
      let target = $(e.target);

      if (target.hasClass('arrow_prev')) {
        setRtl();
        certSliderDirection = 'rtl';
        return;
      }

      if (target.hasClass('arrow_next')) {
        setLtr();
        certSliderDirection = 'ltr';
        return;
      }

      if (target.prop('tagName') == 'IMG') {
        clearTimeout(timer);
      }
    });

    $('[data-fancybox="gallery"]').fancybox({
      loop: true,
      arrows: true,
      infobar: true,
      buttons: ['close'],
      btnTpl: {
        close: `<button data-fancybox-close class="fancybox-button fancybox-button--close cert__close" title="{{CLOSE}}"></button>`,
        arrowLeft: `<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left cert__gallery-arrow cert__gallery-arrow_prev" title="{{PREV}}"></button>`,
        arrowRight: `<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right cert__gallery-arrow cert__gallery-arrow_next" title="{{NEXT}}"></button>`,
      },
      afterClose: function () {

        if (certSliderDirection == 'ltr') {
          setLtr();
          return;
        }

        setRtl();
      },
    });

    //delivery
    const agreeLabel = $('.delivery__agree');
    agreeLabel.on('click', function () {
      if ($(this).hasClass('delivery__agree_active')) {
        console.log(1);
        $(this).parent().find('input').attr('checked', false);
        $(this).removeClass('delivery__agree_active');
        return;
      }
      $(this).parent().find('input').attr('checked', true);
      $(this).addClass('delivery__agree_active');
    });

    //about
    let cloneContainer = $('.about__gallery-item-clone');
    let aboutImgContainer = $('.about__gallery-list');
    let imgs = [];
    $('.about__img').each(function (i) {
      imgs.push($(this).attr('src'));
    });
    function duplicateAboutSlider(img) {
      function createMarkup(img) {
        return `<img src="${img}" alt="" class="about__img-clone" />`;
      }
      cloneContainer.append(createMarkup(img));
    }
    let secImg = $('.about__img')[1];
    let secImgPath = secImg.getAttribute('src');
    duplicateAboutSlider(secImgPath);

    let aboutSlider = $('.about .owl-carousel');
    aboutSlider.owlCarousel({
      loop: true,
      margin: 100,
      dots: false,
      navContainerClass: 'arrows arrows_about',
      navClass: ['arrow arrow_prev arrow_prev--about', 'arrow arrow_next'],
      items: 1,
      animateOut: 'slideOutLeft',
      animateIn: 'fadeIn',
      onInitialized: function (e) {
        $('.about__slider-num').text('1 / ' + this.items().length);
        console.log();
      },
    });

    let cloneImg = $('.about__img-clone');
    aboutSlider.on('drag.owl.carousel', (e) => {
      let activeImg = $(e.target).find('.owl-item.active').next().next().find('img').attr('src');
      setTimeout(() => {
        cloneImg.attr('src', activeImg);
      }, 500);
    });

    let allImgs = $('.about__img');
    aboutSlider.on('changed.owl.carousel', function (e) {
      $('.about__slider-num').text(e.item.index - 1 + '/' + e.item.count);
      let activeImg = allImgs[e.item.index + 1];
      activeImg = activeImg.getAttribute('src');

      cloneImg.attr('src', activeImg);
      cloneImg.css('opacity', 0);
      setTimeout(() => {
        cloneImg.css('opacity', 1);
      }, 300);
    });
    btnModalHandler();
    scrollToNavElem();
    price.setActiveTabAndShowContent();
    price.showAndHideTooltip();
    price.closeTooltipByClick();
    new orderHandler.CustomSelect({
      elem: document.getElementById("district-select"),
    });

    orderHandler.showModal();
    orderHandler.setAttrChecked();
    orderHandler.setCheckedAttrForRadio();
    orderHandler.setCheckedAttrForRadio();

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
