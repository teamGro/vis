let modalHandler = {};

let modalContainer = $('.overlay_delivery');
let modal = $('.popup_delivery');
let btnModalClose = $('.popup__close_delivery');

modalHandler.sendData = function (form, url) {
  $.post(url, form.serializeArray()).done(function (data) {
    if (form.attr('id') == 'formDelivery') {
      getModalCoordsAndShow(modal, modalContainer);
      btnModalClose.on('click', () => {
        hideModal(modalContainer);
      });
      return;
    }
    form.addClass('visually-hidden');
    form.parent().find('.popup__text_answer').css('display', 'block');
    form.parent().find('.popup__text_main').css('display', 'none');
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

export default modalHandler;

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

function showOrHideModal(modalContainer) {
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
  //btnSendHandler();
}

let form = $('#callbackForm');
function modalCloseByClick() {
  modalHandler.recoveryForm(btnModalClose, form, hideModal);
}
