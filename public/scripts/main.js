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

    let btnModalTrigger = $('[data-type="callback"]');
    let modalContainer = $('.overlay_callback');
    let modal = $('.popup_calback');
    let btnModalClose = $('.popup__close');

    let callbackHandler = {};

    function getModalCoordsAndShow() {
        let topScroll = $(window).scrollTop() + 60;
        modalContainer.addClass('overlay_active');
        modal.css('transform', `translateY(${topScroll}px)`);
        modalContainer.css('transform', 'translateX(0)');
    }

    function hideModal() {
        modalContainer.css('transform', 'translateX(-100vw)');
        modalContainer.removeClass('overlay_active');
    }

    callbackHandler.showOrHideModal = function () {
        console.log(1);
        if (modalContainer.hasClass('overlay_active')) {
            hideModal();
            return;
        }

        getModalCoordsAndShow();
    };

    // function btnModalHandler() {
    //     btnModalTrigger.each(function (i) {
    //         $(this).on('click', showOrHideModal);
    //     });
    //     modalCloseByClick();
    // }

    callbackHandler.modalCloseByClick = function () {
        btnModalClose.on('click', hideModal());
    };

    const btnBurger = $('.burger');
    const btnTopElem = $('.burger__elem_top');
    const btnMiddleElem = $('.burger__elem_middle');
    const btnBottomElem = $('.burger__elem_bottom');
    const mobileMenu = $('.header__menu');

    btnBurger.on('click', function () {
      burgerHandler($(this), btnTopElem, btnMiddleElem, btnBottomElem, mobileMenu);
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
        console.log(1);
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
      navClass: ['arrow arrow_prev', 'arrow arrow_next'],
      items: 1,
      animateOut: 'slideOutLeft',
      // animateIn: 'slideInUp',
      //animateOut: 'fadeOut',
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

      setTimeout(() => {
        cloneImg.attr('src', activeImg);
      }, 500);
    });
    let btnModalTrigger$1 = $('[data-type="callback"]');
    let modalContainer$1 = $('.overlay_callback');
    let modal$1 = $('.popup_calback');
    let btnModalClose$1 = $('.popup__close');

    btnModalTrigger$1.each(function (i) {
      $(this).on('click', callbackHandler.showOrHideModal);
    });
    btnModalClose$1.on('click', callbackHandler.modalCloseByClick);

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
