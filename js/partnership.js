(function ($) {
    $(document).ready(function () {

        // // partnerslider
        // const swiperContainer = document.querySelector(".partnerslider");
        // const swiperSlides = swiperContainer.querySelectorAll(".swiper-slide");

        // // Функція для визначення, чи вміщуються всі слайди
        // function shouldAutoplay() {
        //     let totalSlidesWidth = 0;
        //     swiperSlides.forEach(slide => {
        //         totalSlidesWidth += slide.offsetWidth + 20; // ширина слайда + відстань між слайдами
        //     });
        //     return totalSlidesWidth > swiperContainer.offsetWidth;
        // }

        // // Ініціалізація Swiper
        // const swiper = new Swiper(".partnerslider", {
        //     slidesPerView: "auto",
        //     spaceBetween: 20,
        //     loop: true,
        //     speed: 6000,
        //     allowTouchMove: false,
        //     loadPrevNext: true,
        //     autoplay: {
        //         delay: 1,
        //         disableOnInteraction: false,
        //     },
        // });

        // // Увімкнення або вимкнення autoplay залежно від розміру
        // if (shouldAutoplay()) {
        //     swiper.autoplay.start();
        // } else {
        //     swiper.autoplay.stop();
        // }

        // // Перевірка при зміні розміру вікна
        // window.addEventListener("resize", () => {
        //     if (shouldAutoplay()) {
        //         swiper.autoplay.start();
        //     } else {
        //         swiper.autoplay.stop();
        //     }
        // });

        const swiper = new Swiper(".partnerslider", {
            slidesPerView: "auto",
            spaceBetween: 20,
            loop: true,
            speed: 6000,
            allowTouchMove: false,
            loadPrevNext: true,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
        });

        // omisoft baners
        var swiperOmisoft = new Swiper(".omisoftlogoslider", {
            slidesPerView: "auto",
            spaceBetween: 0,
            loop: true,
            speed: 8000,
            allowTouchMove: false,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
        });



    });
}(jQuery));




