const btnBurger = $('.burger');
const btnTopElem = $('.burger__elem_top');
const btnMiddleElem = $('.burger__elem_middle');
const btnBottomElem = $('.burger__elem_bottom');
const mobileMenu = $('.header__menu');

let navs = $('.navigation__list');

function scrollToNavElem() {
    navs.on("click", (e) => {
        let target = $(e.target);
        if (target.prop("tagName") == "A") e.preventDefault();
        let scrollName = target.attr("data-scroll");
        let scrollElem = $(`.${scrollName}`);
        let scrollTop = scrollElem.offset().top;

        $('html, body').animate({
            scrollTop: scrollTop
        }, 500);
        closeMenuIfNeeded();
    })
}

export default scrollToNavElem;

function closeMenuIfNeeded() {
    if (btnBurger.hasClass('burger_opened')) {
        btnTopElem.animate();
        btnMiddleElem.animate({
            opacity: 1,
        });
        btnBottomElem.animate();

        mobileMenu.removeClass('header__menu_open');
        //sliderElem.play();

        btnBurger.animate().removeClass('burger_opened').addClass('burger_closed');

        return;
    }
}
