import openCloseMobileMenu from './burger';
openCloseMobileMenu();

//
import phoneNumsHandler from './expandTelNum';
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

//
import questionsHandler from './questions';
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

//delivery
import inputHandler from './inputsHandler';
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
})

$('.arrow_next--about').on('click', (e)=> {
  let sliderNum = $('.about__slider-num');
  currentSlide++;
  if(currentSlide > allSlides){
    currentSlide = 1;
  }

  sliderNum.text(currentSlide + '/' + allSlides);
})

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

//
import btnModalHandler from './modalCallback';
btnModalHandler();

//
import scrollToNavElem from './navigateHandler';
scrollToNavElem();

//price
import price from './priceHandler';
price.setActiveTabAndShowContent();
price.showAndHideTooltip();

price.closeTooltipByClick();
if ($(window).width() < 1200) {
  price.showTooltipOnMobile();
}

//modal order
import orderHandler from './modalOrder';
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
