$(document).ready(function () {
    // Featured clients slider

    var swiper = new Swiper(".brandsslider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        speed: 6000,
        allowTouchMove: false,

        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
    });

    // expertise hover box
    $('.expertise .col').hover(function () {
        $('.expertise .col').removeClass('active');
        $(this).addClass('active');
    });

    const swiper1 = new Swiper('.mySwiper2', {
        loop: true,
        spaceBetween: 150,
        speed: 2000,
        allowTouchMove: false,
    });

    const buttons = document.querySelectorAll('.prbtn');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const slideIndex = parseInt(this.getAttribute('data-slide-index'));
            swiper1.slideTo(slideIndex, 500); // Adjusted to swiper1.slideTo
        });
    });

    $('.prbtn').click(function(){
        $('.prbtn').removeClass('active');
        $(this).addClass('active');
    })

    // development process
    const swiper3 = new Swiper('.devprocslider', {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: false,
        speed: 1000,
        // breakpoints: {
            // 640: {
            //     slidesPerView: 2,
            //     spaceBetween: 20,
            // },
            // 768: {
            //     slidesPerView: 2,
            //     spaceBetween: 20,
            // },
            // 992: {
            //     slidesPerView: 3,
            //     spaceBetween: 27,
            // },
        // },
    });
    
    

    const swiper4 = new Swiper('.teamexpslider', {
        spaceBetween: 0,
        loop: true,
        speed: 1000,
        breakpoints: {
            1200: {
                slidesPerView: 6,
            },
            1400: {
                slidesPerView: 7,
            },
        },
    });



    



});


// if ($(window).width() < 1200) {

// }


// document.addEventListener('DOMContentLoaded', function () {
   
// });