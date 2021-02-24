let price = {};

const tabs = $('.tabs');
const tooltip = $('.tooltip');
const itemsContainer = $('.price__list');
const tooltipCloseBtn = $('.tooltip__close');

price.setActiveTabAndShowContent = function () {
  tabs.on('click', function (e) {
    let $target = $(e.target);
    if ($target.prop('tagName') != 'LI') return;

    setActiveTab($target, $(this));
    showContent($target);
    hideTooltip(tooltip);
  });
};

function setActiveTab(target, parent) {
  parent.find('.tabs__item_active').removeClass('tabs__item_active');
  target.addClass('tabs__item_active');
}

export default price;

function showContent(target) {
  let attr = target.attr('data-tab');
  console.log(attr)
  //createMarkup(markup[attr], $('.price__list'));
  $('.price__list_active').removeClass('price__list_active');
  let newActiveItem = $(`[data-group=${attr}]`);
  console.log(newActiveItem);
  newActiveItem.addClass('price__list_active');
}

price.showAndHideTooltip = function () {
  if ($(window).width() >= 1200) {
    itemsContainer.hover(
      function (e) {
        $('.price__item').hover(
          function (e) {
            let target = $(e.target);
            showTooltip(target, tooltip);
          },
          function () {
            hideTooltip(tooltip);
          }
        );
      },
      function () {
        hideTooltip(tooltip);
      }
    );
    return;
  }
  price.showTooltipOnMobile();
};

let tooltipContent = {
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere lacinia ex, vel
  ullamcorper leo consequat eu. Donec auctor odio sem`,
};

function hideTooltip(tooltip) {
  for (let i = 0; i < 10; i++) {
    if (tooltip.hasClass('tooltip_active')) {
      tooltip.removeClass('tooltip_active');
      tooltip.find('.tooltip__text_normal').empty();
    } else break;
  }
}

function showTooltip(target, tooltip) {
  if (target.hasClass('price__item_head')) return;
  if (tooltip.hasClass('tooltip_active')) {
    tooltip.removeClass('tooltip_active');
    tooltip.find('.tooltip__text_normal').empty();
  }

  tooltip.find('.tooltip__text_normal').text(tooltipContent.content);

  tooltip.css('left', target.position().left - tooltip.width() - 50 + 'px');
  tooltip.css('top', target.position().top + 'px');

  tooltip.addClass('tooltip_active');
}

price.closeTooltipByClick = function () {
  tooltipCloseBtn.on('click', function (e) {
    $(this).parent().removeClass('tooltip_active');
  });
};

function showTooltipByClick(tooltip, target) {
  if (target.hasClass('price__item_head')) return;
  tooltip.find('.tooltip__text_normal').text(tooltipContent.content);

  tooltip.css('left', target.position().left + target.width() / 2 - tooltip.width() / 2 + 'px');
  tooltip.css('top', target.position().top + 25 + 'px');

  tooltip.addClass('tooltip_active');
}

price.showTooltipOnMobile = function () {
  if ($(window).width() >= 1200) {
    return;
  }

  itemsContainer.on('click', function (e) {
    let target = $(e.target);
    if (!target.hasClass('.price__item')) {
      target = target.closest('.price__item');
    }

    if ($(this).find('.tooltip_active')) {
      hideTooltip(tooltip);
    }

    showTooltipByClick(tooltip, target);
  });
};
