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

    const btnBurger = $('.burger');
    const btnTopElem = $('.burger__elem_top');
    const btnMiddleElem = $('.burger__elem_middle');
    const btnBottomElem = $('.burger__elem_bottom');
    const mobileMenu = $('.header__menu');

    btnBurger.on('click', function () {
        burgerHandler($(this), btnTopElem, btnMiddleElem, btnBottomElem, mobileMenu);
    });

    const telContainer = $(".header__contacts-expand");
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
            }
        },
    };
    let headerTimerID;
    let headerSlider = $('.header .owl-carousel');
    function setRtlHeader() {
        window.clearTimeout(headerTimerID);
        headerTimerID = setTimeout(function f() {
            headerSlider.trigger('prev.owl.carousel');
            headerTimerID = setTimeout(f, 1000);
        }, 1000);
    }

    function setLtrHeader() {
        window.clearTimeout(headerTimerID);
        headerTimerID = setTimeout(function f() {
            headerSlider.trigger('next.owl.carousel');
            headerTimerID = setTimeout(f, 1000);
        }, 1000);
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
            return
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
            headerTimerID = setTimeout(startMoveLtr, 1000);
        }, 1000);
    }, 500);

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
                items: 2
            },
            1024: {
                items: 3,
                nav: true,
            },
            1200: {
                items: 4,
                nav: true,
            }
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
            return
        }

        if (target.prop('tagName') == 'IMG') {
            clearTimeout(timer);
        }
    });

    $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        arrows: true,
        infobar: true,
        buttons: [
            "close"
        ],
        btnTpl: {

            close:
                `<button data-fancybox-close class="fancybox-button fancybox-button--close cert__close" title="{{CLOSE}}"></button>`,

            // Arrows
            arrowLeft:
                `<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left cert__gallery-arrow cert__gallery-arrow_prev" title="{{PREV}}"></button>`,

            arrowRight:
                `<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right cert__gallery-arrow cert__gallery-arrow_next" title="{{NEXT}}"></button>`
        },
        afterClose: function () {
            console.log(1);
            if (certSliderDirection == 'ltr') {
                setLtr();
                return;
            }

            setRtl();
        }

    });

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
