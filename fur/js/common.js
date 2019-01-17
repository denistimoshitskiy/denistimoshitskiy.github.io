$(function() {

	var elem = document.querySelector(".mobile-nav");
	var menu = document.querySelector(".main-nav");



	elem.addEventListener("click", function (evt) {
			evt.preventDefault();
			menu.classList.toggle("main-nav-mobile");

	});

	

});