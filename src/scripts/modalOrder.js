import modalHandler from './sendData';
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
let btnModalClose = $('.popup__close_order');
let form = $('#orderForm');

orderHandler.showModal = function () {
  priceList.on('click', (e) => {
    if ($(e.target).prop('tagName') == 'BUTTON' || $(e.target).parent().prop('tagName') == 'BUTTON') {
      let elem = $(e.target).closest('.price__item');
      let name = elem.find('.price__name').text();
      let price = elem.find('.price__price').text();
      $('.order-form__choice').text(name);
      $('.order-form__price').text(price);
      getModalCoordsAndShow();
    }
    return;
  });

  modalHandler.recoveryForm(btnModalClose, form, hideModal);
};

function getModalCoordsAndShow() {
  let topScroll = $(window).scrollTop() + $(window).height() / 2 - orderModal.height() / 2;
  orderModalContainer.addClass('overlay_active');
  orderModal.css('transform', `translateY(${topScroll}px)`);
  orderModalContainer.css('transform', 'translateX(0)');
}

function hideModal() {
  orderModalContainer.css('transform', 'translateX(-100vw)');
  orderModalContainer.removeClass('overlay_active');
  $('.order-form__choice').text('');
  $('.order-form__price').text('');
}

function showOrHideModal() {
  if (orderModalContainer.hasClass('overlay_active')) {
    hideModal();
    return;
  }

  getModalCoordsAndShow();
}

function btnModalHandler() {
  btnModalTrigger.each(function (i) {
    $(this).on('click', showOrHideModal);
  });
  modalCloseByClick();
}

btnModalClose.on('click', hideModal);

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

export default orderHandler;
