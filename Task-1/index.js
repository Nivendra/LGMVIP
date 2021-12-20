$(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
        $('#navbar').removeClass('fixed-top');
    } else {
        $('#navbar').addClass('fixed-top');
    }
});


$('.carousel').carousel({
    interval: 200
})