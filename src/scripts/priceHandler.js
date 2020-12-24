const tabs = $('.tabs');
function setActiveTabAndShowContent() {
    tabs.on('click', function (e) {
        let $target = $(e.target);
        if ($target.prop('tagName') != 'LI') return;

        setActiveTab($target, $(this));
    })
}

function setActiveTab(target, parent) {
    parent.find('.tabs__item_active').removeClass('tabs__item_active');
    target.addClass('tabs__item_active');
}

export default setActiveTabAndShowContent;