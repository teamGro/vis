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
  sendUserData('/get-callback');
}

function modalCloseByClick() {
  btnModalClose.on('click', () => {
    if (!$('.popup__wrapper').hasClass('visually-hidden')) {
      hideModal();
      return;
    }
    $('.popup__msg-text').remove();
    $('.popup__wrapper').removeClass('visually-hidden');
  });
}

function packUserData() {}

function sendUserData(url) {
  $('#userCallback').submit(function (event) {
    console.log($(this).serializeArray());
    event.preventDefault();

    $.post(url, $(this).serializeArray()).done(function (data) {
      alert('Data Loaded: ');
      $('.popup__wrapper').addClass('visually-hidden');
      // $('.callback-form').css('display', 'none');
      $('.popup_callback').append('<p class="popup__msg-text">Сообщение успешно отправлено.</p>');
    });
  });
}

export default btnModalHandler;
