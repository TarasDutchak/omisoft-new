
(function ($) {

    $(document).ready(function () {

        var swiper = new Swiper(".livedomoslider", {
            loop: true,
            speed: 2000,
            initialSlide: 1,
            slidesPerView: 6,
            spaceBetween: 30,
            slidesPerGroup: 1,
            allowTouchMove: false,
            centeredSlides: false,
            slideToClickedSlide: true,

            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            on: {
                init: function () {
                    updateSlideClasses(this);
                },
                slideChange: function () {
                    updateSlideClasses(this);
                },
            },

            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                    // allowTouchMove: false,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    // allowTouchMove: true,
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
            },
        });

        function updateSlideClasses(swiperInstance) {
            let slides = document.querySelectorAll('.livedomoslider .swiper-slide');

            // Видаляємо старі класи
            slides.forEach(slide => {
                slide.classList.remove('slide-outer-left', 'slide-outer-right');
                for (let i = 0; i < 6; i++) {
                    slide.classList.remove(`slide-${i}`);
                }
            });

            // Визначаємо кількість видимих слайдів
            let slidesToShow = window.innerWidth < 768 ? 2 : (window.innerWidth < 1200 ? 4 : 6);

            // Додаємо класи для видимих слайдів
            for (let i = 0; i < slidesToShow; i++) {
                let slideIndex = swiperInstance.slides[i + swiperInstance.activeIndex] || swiperInstance.slides[i];
                if (slideIndex) {
                    slideIndex.classList.add(`slide-${i}`);
                }
            }

            // Додаємо класи для невидимих слайдів зліва
            for (let i = 0; i < swiperInstance.activeIndex; i++) {
                let leftSlide = swiperInstance.slides[i];
                if (leftSlide) leftSlide.classList.add('slide-outer-left');
            }

            // Додаємо класи для невидимих слайдів справа
            for (let i = swiperInstance.activeIndex + slidesToShow; i < swiperInstance.slides.length; i++) {
                let rightSlide = swiperInstance.slides[i];
                if (rightSlide) rightSlide.classList.add('slide-outer-right');
            }
        }

        // Відразу відкриваємо перший елемент акордеону
        $('.vertical-accordeon .vertical-accordeon__header-row:first-child .vertical-accordeon__body').addClass('show');
        if ($(window).width() > 991) {
            $('.vertical-accordeon__header-row').mouseenter(function () {
                $('.vertical-accordeon__header-row').removeClass('active');
                $(this).addClass('active');

                $('.vertical-accordeon__body').not($(this).find('.vertical-accordeon__body')).removeClass('show');
                var body = $(this).find('.vertical-accordeon__body');
                setTimeout(function () {
                    body.addClass('show');
                }, 0);
            })
        } else {
            $('.vertical-accordeon__header').click(function () {
                $('.vertical-accordeon__body').not($(this).next()).slideUp();
                $(this).next().slideToggle();
            });
        }


        // desktop screen slider
        var swiper = new Swiper(".livedomoslider-descscreen", {
            slidesPerView: 1.1,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            speed: 1500,
            initialSlide: 1,
            allowTouchMove: false,
            // effect: 'coverflow',

            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },

            // coverflowEffect: {
            //     rotate: 0,
            //     stretch: 0,
            //     depth: 100,
            //     modifier: 3,
            //     slideShadows: true
            //   },

            breakpoints: {
                480: {
                    slidesPerView: 1.1,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 1.1,
                    spaceBetween: 40,
                },
                992: {
                    slidesPerView: 1.8,
                    spaceBetween: 80,
                },
                1300: {
                    slidesPerView: 2.1,
                    spaceBetween: 80,
                },
                1500: {
                    slidesPerView: 2.6,
                    spaceBetween: 100,
                },
            },
        });






























        // OUR SOLUTION - slider

        var swiper = new Swiper(".oursolutions-slider", {
            slidesPerView: "auto",
            spaceBetween: 20,
            // mousewheel: {
            //     invert: false,
            //     sensitivity: 1,
            // },



        });








    });

}(jQuery));





