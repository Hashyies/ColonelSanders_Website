/* script.js */
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#top-menu').addClass('scrolled');
        } else {
            $('#top-menu').removeClass('scrolled');
        }
    });
});
