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

//Circular Nav
(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    // this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    // this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

})();