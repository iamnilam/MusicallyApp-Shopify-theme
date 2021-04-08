$('.slider_wrap').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveheight: true,
    autoplaySpeed: 3000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
    adaptiveheight: true,
    autoplaySpeed: 3000,
});


$('.front-page-product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4
});

var filtered = false;

$('.js-filter').on('click', function() {
    if (filtered === false) {
        $('.filtering').slick('slickFilter', ':even');
        $(this).text('Unfilter Slides');
        filtered = true;
    } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
    }
});


$('.grid-uniform').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
    adaptiveheight: true,
    autoplaySpeed: 3000,
});


$('.4').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
    adaptiveheight: true,
    autoplaySpeed: 3000,
});