$(document).ready(function () {
    // Featured clients slider

    var swiper = new Swiper(".brandsslider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        speed: 6000,

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







});


// if ($(window).width() < 1200) {

// }


// document.addEventListener('DOMContentLoaded', function () {
   
// });