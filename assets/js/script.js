jQuery(document).ready(function($){
    /** mentor-row */
    var mentorWrapper = $("#i-mentor");
    if(mentorWrapper.length){
        var firstMentor = mentorWrapper.find(".mentor-row").find('.mentor-item').filter('.hidden').slice(0,10);
        console.log(firstMentor);
        firstMentor.removeClass('hidden').addClass('d-flex');
        $('.cta-arrow').on('click',function(){
            var firstMentor = mentorWrapper.find(".mentor-row").find('.mentor-item').filter('.hidden').slice(0,10);
            firstMentor.removeClass('hidden').addClass('d-flex');
        });
    }
    /** 
    $(".menu-toggler-wrapper .menu-toggler").on('click',function(e){
        e.preventDefault();
        $(this).parent('.menu-toggler-wrapper').next('ul').slideToggle();
    });
    $(".responsive-menu-plus").on('click',function(e){
        e.preventDefault();
        $(this).next('ul').slideToggle();
    });
    */
   /*.menu-toggler*/
    $(".menu-toggler").on('click',function(e){
        e.preventDefault();
        $(this).next(".second-menu-list").slideToggle();
    });
    /** sliders */
    var slickSlider = $('.i-slick-slider');
    slickSlider.each(function(index){
        let column = $(this).data('column');
        let largeColumn = parseInt(column);
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
