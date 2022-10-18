( function ( $ ) {
	$(document).ready(function(){
		console.log('Congrats, ES6!!!');
		$('.cooperation__slider').slick({
			centerMode: true,
			arrows: false,
			centerPadding: '100px',
			slidesToShow: 3,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 3
					}
				},
				{
					breakpoint: 480,
					settings: {

						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 1
					}
				}
			]
		});

		$('.projects__slider').slick({
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 2,
			adaptiveHeight: true,
			prevArrow: '<button type="button" id="prev-1" class="btn-arrow prev"><i class="icon-arrow"></i></button>',
			nextArrow: '<button type="button" id="next-1" class="btn-arrow next"><i class="icon-arrow"></i></button>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 3
					}
				},
				{
					breakpoint: 480,
					settings: {

						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 1
					}
				}
			]
		});

		$('.cooperation__box').click(function () {
			$(this).toggleClass('open');
			$('.cooperation__box').not(this).removeClass('open');

		});
		$(document).mouseup( function(e){
			let div = $( ".cooperation__box" );
			if ( !div.is(e.target)
				&& div.has(e.target).length === 0 ) {
				div.removeClass('open');
			}
		});









		// Inputs

		$('#form-inputs input[type="text"]').blur(function(){
			if($(this).val().length > 0){
				$(this).addClass('white');
			} else {
				$(this).removeClass('white');
			}
		});
		$('#form-inputs textarea').blur(function(){
			if($(this).val().length > 0){
				$(this).addClass('white');
			} else {
				$(this).removeClass('white');
			}
		});



		var slider = document.getElementById("myRange");
		var output = document.getElementById("demo");
		output.innerHTML = slider.value;

		slider.oninput = function() {
			output.innerHTML = this.value;
		}















	})





})(jQuery)
