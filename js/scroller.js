$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});
