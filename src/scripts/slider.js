// slider.headerSlider = new Glide('.glide', {
//     type: 'carousel',
//     autoplay: 3000,
//     //direction: 'rtl',
//     animationTimingFunc: 'linear',
//     perView: 1,
//     // startAt: 1
// });

let slider = {}

slider.sertSliderOptions = {
    loop: true,
    margin: 10,
    //autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    dotsClass: 'sert__dots',
    dotClass: 'sert__dot',
    navContainerClass: 'sert__arrows',
    navClass: ['sert__arrow_prev', 'sert__arrow_next'],
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        768: {
            items: 2
        },
        1024: {
            items: 3,
            nav: true,
        },
        1200: {
            items: 4,
            nav: true,
        }
    },
};

slider.serRtl = function (slider) {
    slider.trigger('prev.owl.carousel');
    setInterval(() => {
        slider.trigger('prev.owl.carousel');
        console.log(1)
    }, 3000)
}

slider.setLtr = function (slider) {
    slider.trigger('next.owl.carousel');
    setInterval(() => {
        console.log(12)
        slider.trigger('next.owl.carousel');
    }, 3000);
}

export default slider;