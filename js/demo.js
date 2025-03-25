
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

        // demotech slider
        // var swiper = new Swiper(".demotech-slider", {
        //     slidesPerView: 4,
        //     spaceBetween: 20,
        //     loop: true,
        //     slidesOffsetBefore: 0,
        //     breakpoints: {
        //         320: {
        //             slidesPerView: 1.8,
        //             slidesOffsetBefore: 20,
        //         },
        //         480: {
        //             slidesPerView: 2.5,
        //             slidesOffsetBefore: 20,
        //         },
        //         575: {
        //             slidesPerView: 2.5,
        //             slidesOffsetBefore: 20,
        //         },
        //         768: {
        //             slidesPerView: 3.5,
        //             slidesOffsetBefore: 20,
        //         },
        //         992: {
        //             slidesPerView: 3,
        //             slidesOffsetBefore: 0,
        //         },
        //         1199: {
        //             slidesPerView: 3.5,
        //             slidesOffsetBefore: 0,
        //         },
        //         1400: {
        //             slidesPerView: 4,
        //             slidesOffsetBefore: 0,
        //         },
        //     },
        // });

        // tech stack
        if ($('.techslider').length) {
            var swiper = new Swiper(".techslider", {
                slidesPerView: 2.3,
                spaceBetween: 16,
                mousewheel: true,
                freeMode: true,
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1.8,
                        spaceBetween: 16,
                        slidesOffsetBefore: 20,
                    },
                    480: {
                        slidesPerView: 2.5,
                        spaceBetween: 30,
                        slidesOffsetBefore: 20,
                    },
                    768: {
                        slidesPerView: 3.5,
                        spaceBetween: 20,
                        slidesOffsetBefore: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                        slidesOffsetBefore: 0,
                    },
                    1200: {
                        slidesPerView: 3.5,
                        spaceBetween: 20,
                        slidesOffsetBefore: 0,
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        slidesOffsetBefore: 0,
                    },

                },
            });

            // Функція для перезапуску автоплей
            let autoplayTimeout;

            // Зупиняємо autoplay при скролі мишкою
            swiper.el.addEventListener('wheel', () => {
                console.log('Mouse wheel event detected. Stopping autoplay.');
                swiper.autoplay.stop();

                clearTimeout(autoplayTimeout);
                // Перезапуск через 2 секунди після зупинки прокручування
                autoplayTimeout = setTimeout(() => {
                    console.log('Restarting autoplay after 2 seconds.');
                    swiper.autoplay.start();
                }, 2000);
            });

            // Зупиняємо autoplay при дотику
            swiper.on('touchStart', () => {
                console.log('Touch event detected. Stopping autoplay.');
                swiper.autoplay.stop();
            });

            // Перезапуск autoplay через 2 секунди після дотику
            swiper.on('touchEnd', () => {
                clearTimeout(autoplayTimeout);
                autoplayTimeout = setTimeout(() => {
                    swiper.autoplay.start();
                }, 2000);
            });
        }




    });

}(jQuery));





