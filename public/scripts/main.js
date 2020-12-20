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

    let headerSlider = new Glide('.glide', {
        type: 'carousel',
        autoplay: 3000,
        //direction: 'rtl',
        animationTimingFunc: 'linear',
        perView: 1,
        // startAt: 1
    });

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

    // setTimeout(() => {
    //     $('.header__slide_sec').css('display', 'flex');
    //     headerSlider.mount();
    // }, 500);

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
        // autoplay: true,
        // autoplayTimeout: 1000,
        //autoplayHoverPause: true,
        dots: true,
        dotsClass: 'cert__dots',
        dotClass: 'cert__dot',
        navContainerClass: 'cert__arrows',
        navClass: ['cert__arrow_prev', 'cert__arrow_next'],
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
        console.log(timer);
        timer = setTimeout(function f() {
            sertSlider.trigger('prev.owl.carousel');
            timer = setTimeout(f, 1000);
        }, 1000);
    }

    function setLtr() {
        window.clearTimeout(timer);
        console.log(timer);
        timer = setTimeout(function f() {
            sertSlider.trigger('next.owl.carousel');
            timer = setTimeout(f, 1000);
        }, 1000);
    }

    $('.cert__arrow_next').on('click', (e) => {
        console.log(e.target);
        setLtr();
    });
    $('.cert__arrow_prev').on('click', function (e) {
        console.log(e.target);
        setRtl();
        // $(this).off()
    });

    $('.cert__list').on('click', (e) => {
        let target = $(e.target);
        console.log(target);
        if (target.closest('.cert__list')) {
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
        }

    });

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
