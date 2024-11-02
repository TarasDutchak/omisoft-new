(function ($) {
    $(document).ready(function () {


        const swiper = new Swiper(".partnerslider", {
            slidesPerView: 1.8,
            spaceBetween: 20,
            loop: true,
            speed: 6000,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
            breakpoints: {
                576: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 3.2,
                },
                992: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
                1400: {
                    slidesPerView: 6,
                },
                1600: {
                    slidesPerView: 7,
                },

            },
        });

        // omisoft baners
        var swiperOmisoft = new Swiper(".omisoftlogoslider", {
            slidesPerView: 1.2,
            spaceBetween: 20,
            loop: true,
            speed: 6000,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },

            breakpoints: {
                400: {
                    slidesPerView: 1.4,
                },
                576: {
                    slidesPerView: 1.5,
                },
                768: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },

            },
            
        });



    });
}(jQuery));




