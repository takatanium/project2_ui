$('article').on('click', function () {
  $('.modal').addClass('is-active');
});

$('.close-modal').on('click', function () {
  $('.modal').removeClass('is-active');
});