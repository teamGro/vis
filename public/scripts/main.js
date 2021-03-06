(function () {
    'use strict';

    const btnBurger = $('.burger');
    const btnTopElem = $('.burger__elem_top');
    const btnMiddleElem = $('.burger__elem_middle');
    const btnBottomElem = $('.burger__elem_bottom');
    const mobileMenu = $('.header__menu');

    function openCloseMobileMenu() {
        btnBurger.on('click', function () {
            burgerHandler($(this), btnTopElem, btnMiddleElem, btnBottomElem, mobileMenu);
        });
    }

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
        num: '8 904 402 79 52',
      },
    ];

    phoneNumsHandler.showAddNumbers = function (parent, data) {
      function markup(item) {
        return `
    <a class="header__tel header__tel_add" href="tel:${item.href}">
        <span class="header__tel-num">${item.num}</span>
    </a>`;
      }

      for (let i = 0; i < data.length; i++) {
        parent.append(markup(data[i]));
      }

      parent.slideDown();
    };

    const questionsList = $('.questions__list');
    let activeQuestion = null;

    function questionsHandler() {
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

        $target.addClass('questions__wrap_open');
        $parent.find('.questions__describe').slideDown('');
        activeQuestion = $parent;
      });
    }

    let modalHandler = {};

    let modalContainer = $('.overlay_delivery');
    let modalDelivery = $('.popup_delivery');
    let btnModalClose = $('.popup__close_delivery');

    modalHandler.sendData = function (form, url) {
      $.post(url, form.serializeArray()).done(function (data) {
        if (form.attr('id') == 'formDelivery') {
          getModalCoordsAndShow(modalDelivery, modalContainer);
          btnModalClose.on('click', () => {
            hideModal(modalContainer);
          });
          return;
        }
        form.addClass('visually-hidden');
        form.parent().find('.popup__text_answer').css('display', 'block');
        form.parent().find('.popup__text_main').css('display', 'none');
        let modal = form.closest('.popup');
        modal.css('transform', `translateY(${$(window).scrollTop() + $(window).height() / 2 - modal.height() / 2}px)`);
      });
    };

    modalHandler.recoveryForm = function (btn, form, func) {
      btn.on('click', () => {
        if (!form.hasClass('visually-hidden')) {
          func();
          return;
        }

        func();

        setTimeout(() => {
          form.removeClass('visually-hidden');
          form.parent().find('.popup__text_answer').css('display', 'none');
          form.parent().find('.popup__text_main').css('display', 'block');
        }, 300);
      });
    };

    function getModalCoordsAndShow(modal, modalContainer) {
      let topScroll = $(window).scrollTop() + $(window).height() / 2 - modal.height() / 2;
      if (topScroll < 60) topScroll = 60;
      modalContainer.addClass('overlay_active');
      modal.css('transform', `translateY(${topScroll}px)`);
      modalContainer.css('transform', 'translateX(0)');
    }

    function hideModal(modalContainer) {
      modalContainer.css('transform', 'translateX(-100vw)');
      modalContainer.removeClass('overlay_active');
    }

    let form = $('#callbackForm');

    let inputHandler = {};

    inputHandler.addError = function (elem) {
      elem.on('blur', function () {
        if ($(this).val().trim() == '') {
          $(this).addClass('input_empty');
        }
      });
    };

    inputHandler.removeErr = function (elem) {
      elem.on('focus', function () {
        if ($(this).hasClass('input_empty')) {
          $(this).removeClass('input_empty');
        }
      });
    };

    inputHandler.btnHandler = function (btn, elem1, elem2, url) {
      btn.on('click', function (e) {
        e.preventDefault();
        let emptyElem = [];

        if (elem1.val().trim() == '') {
          elem1.addClass('input_empty');
          emptyElem.push(elem1);
        }

        if (elem2.val().trim() == '') {
          elem2.addClass('input_empty');
          emptyElem.push(elem2);
        }

        if (btn.hasClass('delivery__btn') && $('#user-agree').prop('checked') != true) {
          emptyElem.push($('#user-agree'));
        }

        if (emptyElem.length) return;
        modalHandler.sendData(btn.closest('form'), url);
      });
    };

    let btnModalTrigger$1 = $('[data-type="callback"]');
    let modalContainer$1 = $('.overlay_callback');
    let modal = $('.popup_calback');
    let btnModalClose$1 = $('.popup__close');

    function getModalCoordsAndShow$1() {
      let topScroll = $(window).scrollTop() + $(window).height() / 2 - modal.height() / 2;
      if (topScroll < 60) topScroll = 60;
      modalContainer$1.addClass('overlay_active');
      modal.css('transform', `translateY(${topScroll}px)`);
      modalContainer$1.css('transform', 'translateX(0)');
    }

    function hideModal$1() {
      modalContainer$1.css('transform', 'translateX(-100vw)');
      modalContainer$1.removeClass('overlay_active');
    }

    function showOrHideModal$1() {
      if (modalContainer$1.hasClass('overlay_active')) {
        hideModal$1();
        return;
      }

      getModalCoordsAndShow$1();
    }

    function btnModalHandler$1() {
      btnModalTrigger$1.each(function (i) {
        $(this).on('click', showOrHideModal$1);
      });
      modalCloseByClick$2();
      //btnSendHandler();
    }

    let form$1 = $('#callbackForm');
    function modalCloseByClick$2() {
      modalHandler.recoveryForm(btnModalClose$1, form$1, hideModal$1);
    }

    const btnBurger$1 = $('.burger');
    const btnTopElem$1 = $('.burger__elem_top');
    const btnMiddleElem$1 = $('.burger__elem_middle');
    const btnBottomElem$1 = $('.burger__elem_bottom');
    const mobileMenu$1 = $('.header__menu');

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
        if (btnBurger$1.hasClass('burger_opened')) {
            btnTopElem$1.animate();
            btnMiddleElem$1.animate({
                opacity: 1,
            });
            btnBottomElem$1.animate();

            mobileMenu$1.removeClass('header__menu_open');
            //sliderElem.play();

            btnBurger$1.animate().removeClass('burger_opened').addClass('burger_closed');

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
        hideTooltip(tooltip);
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
      if ($(window).width() >= 1200) {
        itemsContainer.hover(
          function (e) {
            $('.price__item').hover(
              function (e) {
                let target = $(e.target);
                showTooltip(target, tooltip);
              },
              function () {
                hideTooltip(tooltip);
              }
            );
          },
          function () {
            hideTooltip(tooltip);
          }
        );
        return;
      }
      price.showTooltipOnMobile();
    };

    let tooltipContent = {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere lacinia ex, vel
  ullamcorper leo consequat eu. Donec auctor odio sem`,
    };

    function hideTooltip(tooltip) {
      for (let i = 0; i < 10; i++) {
        if (tooltip.hasClass('tooltip_active')) {
          tooltip.removeClass('tooltip_active');
          tooltip.find('.tooltip__text_normal').empty();
        } else break;
      }
    }

    function showTooltip(target, tooltip) {
      if (target.hasClass('price__item_head')) return;
      if (tooltip.hasClass('tooltip_active')) {
        tooltip.removeClass('tooltip_active');
        tooltip.find('.tooltip__text_normal').empty();
      }

      tooltip.find('.tooltip__text_normal').text(tooltipContent.content);

      tooltip.css('left', target.position().left - tooltip.width() - 50 + 'px');
      tooltip.css('top', target.position().top + 'px');

      tooltip.addClass('tooltip_active');
    }

    price.closeTooltipByClick = function () {
      tooltipCloseBtn.on('click', function (e) {
        $(this).parent().removeClass('tooltip_active');
      });
    };

    function showTooltipByClick(tooltip, target) {
      if (target.hasClass('price__item_head')) return;
      tooltip.find('.tooltip__text_normal').text(tooltipContent.content);

      tooltip.css('left', target.position().left + target.width() / 2 - tooltip.width() / 2 - 50 + 'px');
      tooltip.css('top', target.position().top + 25 + 'px');

      tooltip.addClass('tooltip_active');
    }

    price.showTooltipOnMobile = function () {
      if ($(window).width() >= 1200) {
        return;
      }

      itemsContainer.on('click', function (e) {
        let target = $(e.target);
        if (!target.hasClass('.price__item')) {
          target = target.closest('.price__item');
        }

        if ($(this).find('.tooltip_active')) {
          hideTooltip(tooltip);
        }

        showTooltipByClick(tooltip, target);
      });
    };

    let orderHandler = {};

    orderHandler.CustomSelect = function (options) {
      var elem = options.elem;

      elem.onclick = function (event) {
        if (event.target.className == 'order-form__select-title') {
          toggle();
        } else if (event.target.tagName == 'LI') {
          setValue(event.target.innerHTML, event.target.dataset.value);
          close();
        }
      };

      var isOpen = false;

      function onDocumentClick(event) {
        if (!elem.contains(event.target)) close();
      }

      function setValue(title, value) {
        elem.querySelector('.order-form__select-title span').innerHTML = title;
        $('.order-form__hidden-value').val(title);

        var widgetEvent = new CustomEvent('select', {
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
        elem.classList.add('open');
        document.addEventListener('click', onDocumentClick);
        isOpen = true;
      }

      function close() {
        elem.classList.remove('open');
        document.removeEventListener('click', onDocumentClick);
        isOpen = false;
      }
    };

    let priceList = $('.price__list');
    let orderModalContainer = $('.overlay_order');
    let orderModal = $('.popup_order');
    let btnModalClose$2 = $('.popup__close_order');
    let form$2 = $('#orderForm');

    orderHandler.showModal = function () {
      priceList.on('click', (e) => {
        if ($(e.target).prop('tagName') == 'BUTTON' || $(e.target).parent().prop('tagName') == 'BUTTON') {
          let elem = $(e.target).closest('.price__item');
          let name = elem.find('.price__name').text();
          let price = elem.find('.price__price').text();
          $('.order-form__choice').text(name);
          $('.order-form__price').text(price);
          getModalCoordsAndShow$2();
        }
        return;
      });

      modalHandler.recoveryForm(btnModalClose$2, form$2, hideModal$2);
    };

    function getModalCoordsAndShow$2() {
      let topScroll = $(window).scrollTop() + $(window).height() / 2 - orderModal.height() / 2;
      orderModalContainer.addClass('overlay_active');
      orderModal.css('transform', `translateY(${topScroll}px)`);
      orderModalContainer.css('transform', 'translateX(0)');
    }

    function hideModal$2() {
      orderModalContainer.css('transform', 'translateX(-100vw)');
      orderModalContainer.removeClass('overlay_active');
      $('.order-form__choice').text('');
      $('.order-form__price').text('');
    }

    btnModalClose$2.on('click', hideModal$2);

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
          currentChecked.removeClass('order-form__radio_active');
          currentChecked.parent().find('input').attr('checked', false);
        }
        $(e.target).parent().find('input').attr('checked', true);
        $(e.target).addClass('order-form__radio_active');
        currentChecked = $(e.target);
      });
    };

    openCloseMobileMenu();
    const telContainer = $('.header__contacts-expand');
    const expandPhoneBtn = $('.header__tel-btn');
    expandPhoneBtn.on('click', function (e) {
      e.preventDefault();

      if ($(this).hasClass('header__tel-btn_active')) {
        telContainer.slideUp();

        setTimeout(() => {
          telContainer.empty();
          $(this).removeClass('header__tel-btn_active');
        }, 300);

        return;
      }

      $(this).addClass('header__tel-btn_active');
      phoneNumsHandler.showAddNumbers(telContainer, phoneNumsHandler.numbers);
    });

    //header slider
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
        setRtlHeader();
        return;
      }

      if (target.hasClass('arrow_next--header')) {
        setLtrHeader();
        certSliderDirection = 'ltr';
        return;
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
    questionsHandler();

    //certificates
    let certSlider = $('.cert .owl-carousel');
    certSlider.owlCarousel({
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
      certSlider.trigger('next.owl.carousel');
      timer = setTimeout(startMoveLtr, 1000);
    }, 1000);

    function setRtl() {
      window.clearTimeout(timer);
      timer = setTimeout(function f() {
        certSlider.trigger('prev.owl.carousel');
        timer = setTimeout(f, 1000);
      }, 1000);
    }

    function setLtr() {
      window.clearTimeout(timer);
      timer = setTimeout(function f() {
        certSlider.trigger('next.owl.carousel');
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
    const agreeLabel = $('.delivery__agree');
    agreeLabel.on('click', function () {
      if ($(this).hasClass('delivery__agree_active')) {
        $(this).parent().find('input').attr('checked', false);
        $(this).removeClass('delivery__agree_active');
        return;
      }
      $(this).parent().find('input').attr('checked', true);
      $(this).addClass('delivery__agree_active');
    });

    inputHandler.btnHandler($('.delivery__btn'), $('.delivery__name'), $('.delivery__phone'), '/post-delivery');

    inputHandler.addError($('.delivery__name'));
    inputHandler.removeErr($('.delivery__name'));

    inputHandler.addError($('.delivery__phone'));
    inputHandler.removeErr($('.delivery__phone'));

    //about
    let cloneContainer = $('.about__gallery-item-clone');
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
    let currentSlide = 1;
    let allSlides = 0;
    aboutSlider.owlCarousel({
      loop: true,
      margin: 100,
      dots: false,
      navContainerClass: 'arrows arrows_about',
      navClass: ['arrow arrow_prev arrow_prev--about', 'arrow arrow_next arrow_next--about'],
      items: 1,
      animateOut: 'slideOutLeft',
      animateIn: 'fadeIn',
      onInitialized: function (e) {
        $('.about__slider-num').text('1 / ' + this.items().length);
        allSlides = e.item.count;
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

    $('.arrow_prev--about').on('click', (e)=> {
      let sliderNum = $('.about__slider-num');
      currentSlide--;
      if(currentSlide == 0){
        currentSlide = allSlides;
      }

      sliderNum.text(currentSlide + '/' + allSlides);
    });

    $('.arrow_next--about').on('click', (e)=> {
      let sliderNum = $('.about__slider-num');
      currentSlide++;
      if(currentSlide > allSlides){
        currentSlide = 1;
      }

      sliderNum.text(currentSlide + '/' + allSlides);
    });

    aboutSlider.on('changed.owl.carousel', function (e) {
      let sliderNum = $('.about__slider-num');

      let activeImg = allImgs[e.item.index + 1];
      activeImg = activeImg.getAttribute('src');

      cloneImg.attr('src', activeImg);
      cloneImg.css('opacity', 0);
      setTimeout(() => {
        cloneImg.css('opacity', 1);
      }, 300);
    });
    btnModalHandler$1();
    scrollToNavElem();
    price.setActiveTabAndShowContent();
    price.showAndHideTooltip();

    price.closeTooltipByClick();
    if ($(window).width() < 1200) {
      price.showTooltipOnMobile();
    }
    new orderHandler.CustomSelect({
      elem: document.getElementById('district-select'),
    });

    orderHandler.showModal();
    orderHandler.setAttrChecked();
    orderHandler.setCheckedAttrForRadio();
    orderHandler.setCheckedAttrForRadio();

    inputHandler.btnHandler($('.order-form__btn'), $('#user-order-name'), $('#user-order-tel'), '/post-order');

    inputHandler.addError($('#user-order-name'));
    inputHandler.removeErr($('#user-order-name'));

    inputHandler.addError($('#user-order-tel'));
    inputHandler.removeErr($('#user-order-tel'));

    inputHandler.btnHandler($('.callback-form__btn'), $('.callback-form__input_name'), $('#user-tel'), '/post');

    inputHandler.addError($('.callback-form__input_name'));
    inputHandler.removeErr($('.callback-form__input_name'));

    inputHandler.addError($('#user-tel'));
    inputHandler.removeErr($('#user-tel'));

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
