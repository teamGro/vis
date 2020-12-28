const questionsList = $('.questions__list');
let activeQuestion = null;

function questionsHandler() {
  questionsList.on('click', function (e) {
    let $target = $(e.target);
    if (!$target.closest('.questions__wrap')) return;

    $target = $target.closest('.questions__wrap');
    let $parent = $target.parent();

    if (activeQuestion && activeQuestion.attr('data-num') == $parent.attr('data-num')) {
      activeQuestion.find('.questions__describe').slideUp('slow');
      $target.removeClass('questions__wrap_open');
      activeQuestion = null;
      return;
    }

    if (activeQuestion) {
      activeQuestion.find('.questions__describe').slideUp('slow');
      activeQuestion.find('.questions__wrap_open').removeClass('questions__wrap_open');
    }

    $target.addClass('questions__wrap_open');
    $parent.find('.questions__describe').slideDown('');
    activeQuestion = $parent;
  });
}

export default questionsHandler;
