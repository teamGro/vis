var animalSelect = new CustomSelect({
  elem: document.getElementById("district-select"),
});

function CustomSelect(options) {
  var elem = options.elem;

  elem.onclick = function (event) {
    if (event.target.className == "order-form__select-title") {
      toggle();
    } else if (event.target.tagName == "LI") {
      setValue(event.target.innerHTML, event.target.dataset.value);
      close();
    }
  };

  var isOpen = false;

  // ------ обработчики ------

  // закрыть селект, если клик вне его
  function onDocumentClick(event) {
    if (!elem.contains(event.target)) close();
  }

  // ------------------------

  function setValue(title, value) {
    elem.querySelector(".order-form__select-title").innerHTML = title;

    var widgetEvent = new CustomEvent("select", {
      bubbles: true,
      detail: {
        title: title,
        value: value,
      },
    });

    elem.dispatchEvent(widgetEvent);
  }

  function toggle() {
    if (isOpen) close();
    else open();
  }

  function open() {
    elem.classList.add("open");
    document.addEventListener("click", onDocumentClick);
    isOpen = true;
  }

  function close() {
    elem.classList.remove("open");
    document.removeEventListener("click", onDocumentClick);
    isOpen = false;
  }
}

let priceList = $(".price__list");
let priceBtn = $(".price__btn");
let orderModalContainer = $(".overlay_order");
let orderModal = $(".popup_order");
let btnModalClose = $(".popup__close_order");
priceList.on("click", (e) => {
  console.log($(e.target).prop("tagName"), $(e.target).parent());
  if ($(e.target).prop("tagName") == "BUTTON" || $(e.target).parent().prop("tagName") == "BUTTON") {
    let elem = $(e.target).closest(".price__item");
    let name = elem.find(".price__name").text();
    let price = elem.find(".price__price").text();
    $(".order-form__choice").text(name);
    $(".order-form__price").text(price);
    getModalCoordsAndShow();
  }
  return;
});

function getModalCoordsAndShow() {
  let topScroll = $(window).scrollTop() + $(window).height() / 2 - orderModal.height() / 2;
  orderModalContainer.addClass("overlay_active");
  orderModal.css("transform", `translateY(${topScroll}px)`);
  orderModalContainer.css("transform", "translateX(0)");
}

function hideModal() {
  orderModalContainer.css("transform", "translateX(-100vw)");
  orderModalContainer.removeClass("overlay_active");
  $(".order-form__choice").text("");
  $(".order-form__price").text("");
}

function showOrHideModal() {
  if (orderModalContainer.hasClass("overlay_active")) {
    hideModal();
    return;
  }

  getModalCoordsAndShow();
}

function btnModalHandler() {
  btnModalTrigger.each(function (i) {
    $(this).on("click", showOrHideModal);
  });
  modalCloseByClick();
}

btnModalClose.on("click", hideModal);
