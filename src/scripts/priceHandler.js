const tabs = $('.tabs');
let data = {
    delivery: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a posuere mi. Morbi imperdiet felis id vulputate rhoncus. Curabitur pellentesque cursus gravida. Curabitur ornare dignissim mauris at hendrerit. Duis ut cursus arcu. Duis laoreet dui ac ultrices congue. Suspendisse lacus lacus, vulputate a eleifend ac, gravida nec tortor. Morbi at sagittis tortor. Sed egestas cursus accumsan. In et metus luctus, accumsan leo vitae, tincidunt sapien.`,
        `Donec at orci a risus aliquet aliquet. Aliquam rutrum est sit amet eleifend porta. Sed in erat metus. Nam tristique volutpat purus eget ornare. Phasellus ultrices turpis nec condimentum dapibus. Suspendisse id est at sem efficitur placerat ut vitae leo. Aenean consectetur pulvinar mollis. Sed ac sodales orci. Ut scelerisque nulla sit amet consectetur commodo. Vivamus nec velit ut eros dignissim consequat. Suspendisse elementum dolor sed purus rhoncus mollis. Nullam laoreet ligula urna, non ultricies tortor posuere at. Pellentesque aliquet nunc nec lorem commodo porttitor et nec ipsum. Sed eget diam sodales, rutrum lorem eu, molestie erat.`,
        `Suspendisse pellentesque felis vitae sapien interdum, ut tincidunt est porttitor. Nam purus leo, vulputate eu tincidunt vel, placerat in eros. Nam et lobortis arcu. Nulla augue urna, placerat in felis nec, tempor mollis tellus. Sed hendrerit diam ligula, ac molestie diam euismod eu. Nulla sem justo, faucibus in sagittis ut, maximus eu lorem. Ut ut tortor hendrerit, tempus neque vitae, pharetra tellus. Duis mattis mauris at justo cursus tristique. Mauris faucibus luctus sem. Donec ante ante, pretium vel varius non, pellentesque id eros. Nunc faucibus pharetra lacus in accumsan. Nunc imperdiet viverra enim quis venenatis. Praesent non sem ac leo molestie euismod. Suspendisse mattis dui a risus egestas eleifend.`],
    rent: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a posuere mi. Morbi imperdiet felis id vulputate rhoncus. Curabitur pellentesque cursus gravida. Curabitur ornare dignissim mauris at hendrerit. Duis ut cursus arcu. Duis laoreet dui ac ultrices congue. Suspendisse lacus lacus, vulputate a eleifend ac, gravida nec tortor. Morbi at sagittis tortor. Sed egestas cursus accumsan. In et metus luctus, accumsan leo vitae, tincidunt sapien.`,
        `Donec at orci a risus aliquet aliquet. Aliquam rutrum est sit amet eleifend porta. Sed in erat metus. Nam tristique volutpat purus eget ornare. Phasellus ultrices turpis nec condimentum dapibus. Suspendisse id est at sem efficitur placerat ut vitae leo. Aenean consectetur pulvinar mollis. Sed ac sodales orci. Ut scelerisque nulla sit amet consectetur commodo. Vivamus nec velit ut eros dignissim consequat. Suspendisse elementum dolor sed purus rhoncus mollis. Nullam laoreet ligula urna, non ultricies tortor posuere at. Pellentesque aliquet nunc nec lorem commodo porttitor et nec ipsum. Sed eget diam sodales, rutrum lorem eu, molestie erat.`,
        `Suspendisse pellentesque felis vitae sapien interdum, ut tincidunt est porttitor. Nam purus leo, vulputate eu tincidunt vel, placerat in eros. Nam et lobortis arcu. Nulla augue urna, placerat in felis nec, tempor mollis tellus. Sed hendrerit diam ligula, ac molestie diam euismod eu. Nulla sem justo, faucibus in sagittis ut, maximus eu lorem. Ut ut tortor hendrerit, tempus neque vitae, pharetra tellus. Duis mattis mauris at justo cursus tristique. Mauris faucibus luctus sem. Donec ante ante, pretium vel varius non, pellentesque id eros. Nunc faucibus pharetra lacus in accumsan. Nunc imperdiet viverra enim quis venenatis. Praesent non sem ac leo molestie euismod. Suspendisse mattis dui a risus egestas eleifend.`]
};

let markup = {
    grout: `<li class="price__item price__item_head">
    <div class="price__item-wrap">
        <span class="price__name price__name_head">Наименование</span>
        <span class="price__price price__price_head">Цена</span>
    </div>
</li>
<li class="price__item">
    <div class="price__img-wrap">
        <img src="./img/sales.png" alt="" class="price__imgprice__sales">
        <img src="./img/hit.png" alt="" class="price__img price__hit">
    </div>
    <div class="price__item-wrap">
        <span class="price__name">Бетон В 22.5 М 300</span>
        <span class="price__price">3 450 руб / м3 </span>
    </div>
    <button type="button" class="price__btn" data-type="callback">
        <span>Подробнее</span>
        <img src="./img/arrow-btn-header.png" alt="" />
    </button>
</li>
<li class="price__item">
    <div class="price__img-wrap">
        <img src="./img/sales.png" alt="" class="price__imgprice__sales">
        <img src="./img/hit.png" alt="" class="price__img price__hit">
    </div>
    <div class="price__item-wrap">
        <span class="price__name">Бетон В 22.5 М 300</span>
        <span class="price__price">3 450 руб / м3 </span>
    </div>
    <button type="button" class="price__btn" data-type="callback">
        <span>Подробнее</span>
        <img src="./img/arrow-btn-header.png" alt="" />
    </button>
</li>
<li class="price__item">
    <div class="price__img-wrap">
        <img src="./img/sales.png" alt="" class="price__imgprice__sales">
        <img src="./img/hit.png" alt="" class="price__img price__hit">
    </div>
    <div class="price__item-wrap">
        <span class="price__name">Бетон В 22.5 М 300</span>
        <span class="price__price">3 450 руб / м3 </span>
    </div>
    <button type="button" class="price__btn" data-type="callback">
        <span>Подробнее</span>
        <img src="./img/arrow-btn-header.png" alt="" />
    </button>
</li>
<li class="price__item">
    <div class="price__img-wrap">
        <img src="./img/sales.png" alt="" class="price__imgprice__sales">
        <img src="./img/hit.png" alt="" class="price__img price__hit">
    </div>
    <div class="price__item-wrap">
        <span class="price__name">Бетон В 22.5 М 300</span>
        <span class="price__price">3 450 руб / м3 </span>
    </div>
    <button type="button" class="price__btn" data-type="callback">
        <span>Подробнее</span>
        <img src="./img/arrow-btn-header.png" alt="" />
    </button>
</li>
<li class="price__item">
    <div class="price__img-wrap">
        <img src="./img/sales.png" alt="" class="price__imgprice__sales">
        <img src="./img/hit.png" alt="" class="price__img price__hit">
    </div>
    <div class="price__item-wrap">
        <span class="price__name">Бетон В 22.5 М 300</span>
        <span class="price__price">3 450 руб / м3 </span>
    </div>
    <button type="button" class="price__btn" data-type="callback">
        <span>Подробнее</span>
        <img src="./img/arrow-btn-header.png" alt="" />
    </button>
</li>`
}
function setActiveTabAndShowContent() {
    tabs.on('click', function (e) {
        let $target = $(e.target);
        if ($target.prop('tagName') != 'LI') return;

        setActiveTab($target, $(this));
        showContent($target);
    })
}

function setActiveTab(target, parent) {
    parent.find('.tabs__item_active').removeClass('tabs__item_active');
    target.addClass('tabs__item_active');
}

export default setActiveTabAndShowContent;

function crateMarkup(data, parent, getMarkup) {
    parent.empty();
    data.forEach(item => {
        parent.append(`<p class="price__delivery">${item}</p>`);
    });
}



function showContent(target) {
    let attr = target.attr('data-tab');
    crateMarkup(data[attr], $('.price__list'))
}