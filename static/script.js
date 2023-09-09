/* script.js */
$(document).ready(function() {
    var sections = $('.section');
    var currentSection = 0;
    var isAnimating = false;

    $(window).scroll(function() {
        if (isAnimating) return;

        var downTriggerPoint = $(window).height() * 0.2;
        var upTriggerPoint = $(window).height() * 0.8;
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition > $(sections[currentSection]).offset().top + downTriggerPoint) {
            // Scroll down to next section if more than 20% through current section
            currentSection++;
            isAnimating = true;
            $('html, body').animate({
                scrollTop: $(sections[currentSection]).offset().top
            }, 'slow', function() {
                isAnimating = false;
            });
        } else if (currentSection > 0 && scrollPosition < $(sections[currentSection - 1]).offset().top + upTriggerPoint) {
            // Scroll up to previous section if more than 80% through current section
            currentSection--;
            isAnimating = true;
            $('html, body').animate({
                scrollTop: $(sections[currentSection]).offset().top
            }, 'slow', function() {
                isAnimating = false;
            });
        }
    });
});
