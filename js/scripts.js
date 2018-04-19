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
	var myInterval = setInterval(changeSlide, 3000);

	$('#next').on('click', function() {

		clearInterval(myInterval);
		changeSlide();

	});

	$('#prev').on('click', function(){

		clearInterval(myInterval);
		myInterval = setInterval(reverseSlide, 3000);

		function reverseSlide() {
			previousSlide();
			carouselList.animate({marginLeft: 0}, 1000);
		}

		function previousSlide() {
			var firstItem = carouselList.find('li:first');
			var lastItem = carouselList.find('li:last');
			firstItem.before(lastItem);
            carouselList.css({marginLeft: -600});
		}
	});	

});