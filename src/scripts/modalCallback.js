let btnModalTrigger = $('[data-type="callback"]');
let modalContainer = $('.overlay_callback');
let modal = $('.popup_calback');
let btnModalClose = $('.popup__close');

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
}

function modalCloseByClick() {
    console.log(1)
    btnModalClose.on('click', hideModal);
}

export default btnModalHandler;

