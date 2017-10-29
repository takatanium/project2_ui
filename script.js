$('article').on('click', function (evt) {
	if (evt.target.id === 'favorite') return;
  $('.modal').addClass('is-active');
});

$('.close-modal').on('click', function () {
  $('.modal').removeClass('is-active');
});

$('.modal-background').on('click', function () {
  $('.modal').removeClass('is-active');
});

$('.favorite').on('click', function () {
  if ($(this).hasClass('fa-star')) {
  	$(this).removeClass('fa-star');
  	$(this).addClass('fa-star-o');
  } else {
  	$(this).removeClass('fa-star-o');
  	$(this).addClass('fa-star');
  }
});