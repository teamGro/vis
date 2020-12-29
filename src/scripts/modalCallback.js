import sendData from './sendData';

let btnModalTrigger = $('[data-type="callback"]');
let modalContainer = $('.overlay_callback');
let modal = $('.popup_calback');
let btnModalClose = $('.popup__close');

function getModalCoordsAndShow() {
  let topScroll = $(window).scrollTop() + $(window).height() / 2 - modal.height() / 2;
  if (topScroll < 60) topScroll = 60;
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
  btnModalTrigger.each(function (i) {
    $(this).on('click', showOrHideModal);
  });
  modalCloseByClick();
  btnSendHandler();
}

function modalCloseByClick() {
  btnModalClose.on('click', hideModal);
}

function btnSendHandler() {
  $('.callback-form__btn').on('click', function () {
    sendData($('#callbackForm'));
  });
}

export default btnModalHandler;
