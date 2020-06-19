jQuery(document).ready(function($){
    var slickSlider = $('.i-slick-slider');
    slickSlider.each(function(index){
        let column = $(this).data('column');
        let largeColumn = parseInt(column);
        console.log(largeColumn);
        let mediumColumn = parseInt(largeColumn-1);
        let smallColumn = 1;
        $(this).slick({
            dots: false,
            slidesToShow: largeColumn,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            rtl: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: largeColumn,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: mediumColumn,
                        slidesToScroll: 2,
                        dots: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: smallColumn,
                        slidesToScroll: 1,
                        dots: false,
                    }
                }
            ],
            prevArrow: '<div class="slick-prev"></div>',
            nextArrow: '<div class="slick-next"></div>'    
        });
    });
}); 
