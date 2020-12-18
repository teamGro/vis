import burgerHandler from './burger';
import phoneNumsHandler from './expandTelNum';
import headerSlider from './slider';

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

headerSlider.mount();