$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
});
