let price = {};

const tabs = $('.tabs');
const tooltip = $('.tooltip');
const itemsContainer = $('.price__list');
const tooltipCloseBtn = $('.tooltip__close');

let markup = {
  delivery: {
    markup: function (data) {
      return `<p class="price__delivery">${data}</p>`;
    },
    data: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a posuere mi. Morbi imperdiet felis id vulputate rhoncus. Curabitur pellentesque cursus gravida. Curabitur ornare dignissim mauris at hendrerit. Duis ut cursus arcu. Duis laoreet dui ac ultrices congue. Suspendisse lacus lacus, vulputate a eleifend ac, gravida nec tortor. Morbi at sagittis tortor. Sed egestas cursus accumsan. In et metus luctus, accumsan leo vitae, tincidunt sapien.`,
      `Donec at orci a risus aliquet aliquet. Aliquam rutrum est sit amet eleifend porta. Sed in erat metus. Nam tristique volutpat purus eget ornare. Phasellus ultrices turpis nec condimentum dapibus. Suspendisse id est at sem efficitur placerat ut vitae leo. Aenean consectetur pulvinar mollis. Sed ac sodales orci. Ut scelerisque nulla sit amet consectetur commodo. Vivamus nec velit ut eros dignissim consequat. Suspendisse elementum dolor sed purus rhoncus mollis. Nullam laoreet ligula urna, non ultricies tortor posuere at. Pellentesque aliquet nunc nec lorem commodo porttitor et nec ipsum. Sed eget diam sodales, rutrum lorem eu, molestie erat.`,
      `Suspendisse pellentesque felis vitae sapien interdum, ut tincidunt est porttitor. Nam purus leo, vulputate eu tincidunt vel, placerat in eros. Nam et lobortis arcu. Nulla augue urna, placerat in felis nec, tempor mollis tellus. Sed hendrerit diam ligula, ac molestie diam euismod eu. Nulla sem justo, faucibus in sagittis ut, maximus eu lorem. Ut ut tortor hendrerit, tempus neque vitae, pharetra tellus. Duis mattis mauris at justo cursus tristique. Mauris faucibus luctus sem. Donec ante ante, pretium vel varius non, pellentesque id eros. Nunc faucibus pharetra lacus in accumsan. Nunc imperdiet viverra enim quis venenatis. Praesent non sem ac leo molestie euismod. Suspendisse mattis dui a risus egestas eleifend.`,
    ],
  },
  rent: {
    markup: function (data) {
      return `<p class="price__delivery">${data}</p>`;
    },
    data: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a posuere mi. Morbi imperdiet felis id vulputate rhoncus. Curabitur pellentesque cursus gravida. Curabitur ornare dignissim mauris at hendrerit. Duis ut cursus arcu. Duis laoreet dui ac ultrices congue. Suspendisse lacus lacus, vulputate a eleifend ac, gravida nec tortor. Morbi at sagittis tortor. Sed egestas cursus accumsan. In et metus luctus, accumsan leo vitae, tincidunt sapien.`,
      `Donec at orci a risus aliquet aliquet. Aliquam rutrum est sit amet eleifend porta. Sed in erat metus. Nam tristique volutpat purus eget ornare. Phasellus ultrices turpis nec condimentum dapibus. Suspendisse id est at sem efficitur placerat ut vitae leo. Aenean consectetur pulvinar mollis. Sed ac sodales orci. Ut scelerisque nulla sit amet consectetur commodo. Vivamus nec velit ut eros dignissim consequat. Suspendisse elementum dolor sed purus rhoncus mollis. Nullam laoreet ligula urna, non ultricies tortor posuere at. Pellentesque aliquet nunc nec lorem commodo porttitor et nec ipsum. Sed eget diam sodales, rutrum lorem eu, molestie erat.`,
      `Suspendisse pellentesque felis vitae sapien interdum, ut tincidunt est porttitor. Nam purus leo, vulputate eu tincidunt vel, placerat in eros. Nam et lobortis arcu. Nulla augue urna, placerat in felis nec, tempor mollis tellus. Sed hendrerit diam ligula, ac molestie diam euismod eu. Nulla sem justo, faucibus in sagittis ut, maximus eu lorem. Ut ut tortor hendrerit, tempus neque vitae, pharetra tellus. Duis mattis mauris at justo cursus tristique. Mauris faucibus luctus sem. Donec ante ante, pretium vel varius non, pellentesque id eros. Nunc faucibus pharetra lacus in accumsan. Nunc imperdiet viverra enim quis venenatis. Praesent non sem ac leo molestie euismod. Suspendisse mattis dui a risus egestas eleifend.`,
    ],
  },
  grout: {
    markupHeader: `<li class="price__item price__item_head">
        <div class="price__item-wrap">
            <span class="price__name price__name_head">Наименование</span>
            <span class="price__price price__price_head">Цена</span>
        </div>
    </li>`,
    markup: `<li class="price__item">
        <div class="price__img-wrap">
            <img src="./img/sales.png" alt="" class="price__imgprice__sales">
            <img src="./img/hit.png" alt="" class="price__img price__hit">
        </div>
        <div class="price__item-wrap">
            <span class="price__name">Бетон В 22.5 М 300</span>
            <span class="price__price">3 450 руб / м3 </span>
        </div>
        <button type="button" class="price__btn">
            <span>Подробнее</span>
            <img src="./img/arrow-btn-header.png" alt="" />
        </button>
    </li>`,
    data: [
      { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
      { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
      { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
    ],
  },
  concrete: {
    markupHeader: `<li class="price__item price__item_head">
        <div class="price__item-wrap">
            <span class="price__name price__name_head">Наименование</span>
            <span class="price__price price__price_head">Цена</span>
        </div>
    </li>`,
    markup: function (data) {
      return `<li class="price__item">
        <div class="price__img-wrap">
            <img src="./img/sales.png" alt="" class="price__imgprice__sales">
            <img src="./img/hit.png" alt="" class="price__img price__hit">
        </div>
        <div class="price__item-wrap">
            <span class="price__name">${data.name}</span>
            <span class="price__price">${data.price}</span>
        </div>
        <button type="button" class="price__btn">
            <span>Подробнее</span>
            <img src="./img/arrow-btn-header.png" alt="" />
        </button>
    </li>`;
    },
    data: [
      { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
      { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
      { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
    ],
  },
  grout: {
    markupHeader: `<li class="price__item price__item_head">
        <div class="price__item-wrap">
            <span class="price__name price__name_head">Наименование</span>
            <span class="price__price price__price_head">Цена</span>
        </div>
    </li>`,
    markup: function (data) {
      return `<li class="price__item">
        <div class="price__img-wrap">
            <img src="./img/sales.png" alt="" class="price__imgprice__sales">
            <img src="./img/hit.png" alt="" class="price__img price__hit">
        </div>
        <div class="price__item-wrap">
            <span class="price__name">${data.name}</span>
            <span class="price__price">${data.price}</span>
        </div>
        <button type="button" class="price__btn" data-type="callback">
            <span>Подробнее</span>
            <img src="./img/arrow-btn-header.png" alt="" />
        </button>
    </li>`;
    },
    data: [
      { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
      { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
      { name: 'Бетон В 22.5 М 300', price: '3 450 руб / м3' },
    ],
  },
};

price.setActiveTabAndShowContent = function () {
  tabs.on('click', function (e) {
    let $target = $(e.target);
    if ($target.prop('tagName') != 'LI') return;

    setActiveTab($target, $(this));
    showContent($target);
  });
};

function setActiveTab(target, parent) {
  parent.find('.tabs__item_active').removeClass('tabs__item_active');
  target.addClass('tabs__item_active');
}

export default price;

function createMarkup(data, parent) {
  parent.find('.price__item').each(function (i) {
    $(this).addClass('price__item_inactive');
  });

  parent.find('.price__delivery').each(function (i) {
    $(this).addClass('price__delivery_inactive');
  });

  setTimeout(() => {
    parent.empty();
    if (data.markupHeader) {
      parent.append(data.markupHeader);
      data.data.forEach((item) => {
        parent.append(data.markup(item));
      });

      return;
    }

    data.data.forEach((item) => {
      parent.append(data.markup(item));
    });
  }, 500);
}

function showContent(target) {
  let attr = target.attr('data-tab');
  createMarkup(markup[attr], $('.price__list'));
}

let itemPrice = $('.price__item');
price.showAndHideTooltip = function () {
  itemPrice.hover(
    function (e) {
      console.log($(e.target));
      showTooltip($(e.target), tooltip);
    },
    function (e) {
      console.log(2);
      hideTooltip(tooltip);
    }
  )
  // itemsContainer.each(function (i) {
  //   $(this).on('click', (e) => {
  //     let $target = $(e.target);
  //     $target = $target.closest('.price__item');
  //     showTooltip($target, tooltip);
  //   });

  //   $(this).on('mouseenter', (e) => {
  //     let $target = $(e.target);
  //     $target = $target.closest('.price__item');
  //     showTooltip($target, tooltip);
  //   });
  //   $(this).on('mouseout', function (e) {
  //     let $target = $(e.target);
  //     hideTooltip()
  //   });

  // });
};

let tooltipContent = {
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere lacinia ex, vel
  ullamcorper leo consequat eu. Donec auctor odio sem`
}


function hideTooltip(tooltip) {
  tooltip.removeClass('tooltip_active');
  tooltip.find('.tooltip__text_normal').empty();


}



function showTooltip(target, tooltip) {
  if (tooltip.hasClass('tooltip_active')) {
    tooltip.removeClass('tooltip_active');
    tooltip.find('.tooltip__text_normal').empty();
  }

  //let tooltipHeight = ;
  console.log(target.position())
  let targetPosition = target.offset().top - tooltip.height() - target.height();//
  //console.log(tooltipHeight)
  //console.log(targetPosition)
  tooltip.find('.tooltip__text_normal').text(tooltipContent.content);

  tooltip.css('left', target.position().left - tooltip.width() - 50 + 'px');
  tooltip.css('top', target.position().top + 'px');

  setTimeout(() => {
    tooltip.addClass('tooltip_active');

  }, 500)
}

price.closeTooltipByClick = function () {
  tooltipCloseBtn.on('click', (e) => {
    $(e.target).parent().removeClass('tooltip_active');
  })
}
