let inputHandler = {};

inputHandler.addError = function (elem) {
  elem.on('blur', function () {
    if ($(this).val().trim() == '') {
      $(this).addClass('input_empty');
    }
  });
};

inputHandler.removeErr = function (elem) {
  elem.on('focus', function () {
    if ($(this).hasClass('input_empty')) {
      $(this).removeClass('input_empty');
    }
  });
};

inputHandler.btnHandler = function (btn, elem1, elem2) {
  btn.on('click', function (e) {
    let emptyElem = [];

    if (elem1.val().trim() == '') {
      elem1.addClass('input_empty');
      emptyElem.push(elem1);
    }

    if (elem2.val().trim() == '') {
      elem2.addClass('input_empty');
      emptyElem.push(elem2);
    }

    if (btn.hasClass('delivery__btn') && $('#user-agree').length && $('#user-agree').attr('checked') != 'true') {
      emptyElem.push($('#user-agree'));
    }

    if (emptyElem.length) return;
  });
};

export default inputHandler;
