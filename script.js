$(document).ready(function() {
    $('#button-home').click(function() {
        $('html,body').animate({
            scrollTop: $("#home").offset().top
        }, 1000);
    });
    $('#button-games').click(function() {
        $('html,body').animate({
            scrollTop: $("#games").offset().top
        }, 1000);
    });
    $('#button-contact').click(function() {
        $('html,body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});