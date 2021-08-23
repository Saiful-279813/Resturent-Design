$(document).ready(function(){
    $('.banner-area').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        infinite: true,
        autoplay: true,
        loop: true,

        // responsive: [
        //     {
        //         breakpoint: 600,
        //         settings:{
        //             arrows: false
        //         }
        //     }
        // ]
    });
    // testimonials 
    $('.testimonials').slick({
        arrows: false,
        slidesToShow: 2,
        infinite: true,
        autoplay: true,
        loop: true,
        dots: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    });
    // slick nav activation 
    $('#nav').slicknav();
});
// sticky menu 
$(window).on("scroll",function(){
    if($(this).scrollTop() > 25){
        $('.header-area').addClass('sticky');
    }else{
        $('.header-area').removeClass('sticky');
    }
    // scroll button 
    if( $(this).scrollTop() > 400 ){
        $("#return").addClass('scroll-bar');
    } else{
        $("#return").removeClass('scroll-bar');
    }

    $("#return").click(function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 500);
    });
});

  