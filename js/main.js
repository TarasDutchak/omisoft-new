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

    const swiperpr = new Swiper('.projbtns', {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        speed: 2000,
        // allowTouchMove: false,

        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },

    });


    $('.projbtns .swiper-slide').hover(function(){
        swiperpr.autoplay.stop();
      }, function(){
        swiperpr.autoplay.start();
      });




    const swiper1 = new Swiper('.mySwiper2', {
        loop: true,
        spaceBetween: 150,
        speed: 2000,
        allowTouchMove: false,

        thumbs: {
            swiper: swiperpr,
          },
        breakpoints: {
            992: {
            autoHeight: true,
        },
            1200: {
                autoHeight: false,
            },
        },

    });


  
    
    // const buttons = document.querySelectorAll('.prbtn');
    // buttons.forEach(button => {
    //     button.addEventListener('click', function () {
    //         const slideIndex = parseInt(this.getAttribute('data-slide-index'));
    //         swiper1.slideTo(slideIndex, 500); 
    //     });
    // });

    $('.prbtn').click(function(){
        $('.prbtn').removeClass('active');
        $(this).addClass('active');
    })





    // development process

    var init = false;
    var swiper3;
    function swiperCard() {
      if (window.innerWidth >= 576) {
        if (!init) {
          init = true;
          swiper3 = new Swiper(".devprocslider", {
                   spaceBetween: 20,
        loop: false,
        speed: 1000,
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 5,
            },
        },
          });
        }
      } else if (init) {
        swiper3.destroy();
        init = false;
      }
    }
    swiperCard();
    window.addEventListener("resize", swiperCard);










    const swiper4 = new Swiper('.teamexpslider', {
        slidesPerView: 1.8,
        spaceBetween: 0,
        loop: true,
        speed: 1000,
        breakpoints: {
            575: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            },
        },
    });
    

 































    

});


// if ($(window).width() < 1200) {

// }


// document.addEventListener('DOMContentLoaded', function () {
   
// });