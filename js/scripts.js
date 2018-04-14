$(document).ready(function(){

	var carouselList = $('#carousel ul');

	function changeSlide() {
		carouselList.animate({marginLeft: -600}, 1000, moveFirstSlide);
	}

	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
	}
	var myInterval = setInterval(changeSlide, 4000);

	$('#next').on('click', function() {

		clearInterval(myInterval);

		changeSlide();
		
	});

	$('#prev').on('click', function(){

		clearInterval(myInterval);

		function reverseSlide() {

			moveFirstSlide();
			carouselList.css({marginRight: 0});
		}

		carouselList.animate({marginLeft: 600}, 1000, reverseSlide);

	});

});