let phoneNumsHandler = {};

phoneNumsHandler.numbers = [
    {
        href: '+79044027952',
        num: '8 904 402 79 52'
    }
]


phoneNumsHandler.showAddNumbers = function (parent, data) {
    function markup(item) {
        return `
    <a class="header__tel header__tel_add" href="tel:${item.href}">
        <span class="header__tel-num">${item.num}</span>
    </a>`;
    }

    for (let i = 0; i < data.length; i++) {
        console.log(parent)
        parent.append(markup(data[i]));
    }

    parent.slideDown()

}


export default phoneNumsHandler;

