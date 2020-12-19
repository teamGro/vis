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

setTimeout(() => {
    $('.header__slide_sec').css('display', 'flex');
    headerSlider.mount();
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
})