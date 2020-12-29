function sendData(form, url) {
  console.log(form);
  form.on('submit', function (event) {
    console.log($(this).serializeArray());
    event.preventDefault();
    $.post('/post', $(this).serializeArray()).done(function (data) {
      alert('Data Loaded: ');
      form.addClass('visually-hidden');
      console.log($(this));
      form.parent().find('.popup__text_answer').css('display', 'block');
      form.parent().find('.popup__text_main').css('display', 'none');
    });
  });
}

export default sendData;
