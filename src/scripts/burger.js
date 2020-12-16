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

export default burgerHandler;