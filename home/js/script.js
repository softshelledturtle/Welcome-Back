$(document).ready(function() {
	$(".nav-item").hover(function () {
        $(this).children(".nav-sublist").slideDown('fast');
    }, function () {
        $(this).children(".nav-sublist").slideUp('slow');
    });
});