$('article').on('click', function () {
  $('.modal').addClass('is-active');
});

$('.close-modal').on('click', function () {
  $('.modal').removeClass('is-active');
});

$('.modal-background').on('click', function (evt) {
  $('.modal').removeClass('is-active');
});