
(function ($) {

    $(document).ready(function () {




        // var swiper = new Swiper(".livedomoslider", {
        //     loop: true,
        //     speed: 1500,
        //     initialSlide: 1,
        //     slidesPerView: 6,
        //     spaceBetween: 30,
        //     slidesPerGroup: 1,
        //     centeredSlides: false,
        //     slideToClickedSlide: true,
        //     allowTouchMove: false,

        //     //     autoplay: {
        //     //         delay: 2500,
        //     //         disableOnInteraction: false,
        //     //     },



        //     on: {
        //         init: function () {
        //             updateSlideClasses(this);
        //         },
        //         slideChange: function () {
        //             updateSlideClasses(this);
        //         },
        //     },

        //     breakpoints: {
        //         0: {
        //             slidesPerView: 2,
        //             spaceBetween: 20,
        //             allowTouchMove: true,
        //         },
        //         768: {
        //             slidesPerView: 4,
        //             spaceBetween: 30,
        //         },
        //         1200: {
        //             slidesPerView: 6,
        //             spaceBetween: 30,
        //         },
        //     },
        // });

        // function updateSlideClasses(swiperInstance) {
        //     let slides = document.querySelectorAll('.livedomoslider .swiper-slide');

        //     // Видаляємо старі класи
        //     slides.forEach(slide => {
        //         slide.classList.remove('slide-outer-left', 'slide-0', 'slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5', 'slide-outer-right');
        //     });

        //     // Визначаємо, скільки слайдів повинно мати класи
        //     let slidesToShow = window.innerWidth < 768 ? 2 : (window.innerWidth < 1200 ? 4 : 6);

        //     // Додаємо класи для активних слайдів
        //     for (let i = 0; i < slidesToShow; i++) {
        //         let slideIndex = swiperInstance.slides[i + swiperInstance.activeIndex] || swiperInstance.slides[i];
        //         if (slideIndex) {
        //             slideIndex.classList.add(`slide-${i}`);
        //         }
        //     }

        //     // Додаємо класи для крайніх слайдів
        //     let leftSlideIndex = swiperInstance.slides[swiperInstance.activeIndex - 1] || swiperInstance.slides[swiperInstance.slides.length - 1];
        //     let rightSlideIndex = swiperInstance.slides[swiperInstance.activeIndex + slidesToShow] || swiperInstance.slides[0];

        //     if (leftSlideIndex) leftSlideIndex.classList.add('slide-outer-left');
        //     if (rightSlideIndex) rightSlideIndex.classList.add('slide-outer-right');
        // }



        var swiper = new Swiper(".livedomoslider", {
            loop: true,
            speed: 1500,
            initialSlide: 1,
            slidesPerView: 6,
            spaceBetween: 30,
            slidesPerGroup: 1,
            // allowTouchMove: false,
            centeredSlides: false,
            slideToClickedSlide: true,

            //     autoplay: {
            //         delay: 2500,
            //         disableOnInteraction: false,
            //     },

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



























        $('.vertical-accordeon .vertical-accordeon__header-row:nth-child(1) .vertical-accordeon__body').addClass('show');
        function setEventListeners() {
            if ($(window).width() < 991) {
                // On click for screens smaller than 991px
                $('.vertical-accordeon__header-row').off('mouseenter mouseleave').click(function () {
                    $('.vertical-accordeon__header-row').removeClass('active');
                    $(this).addClass('active');

                    // Find the corresponding .vertical-accordeon__body and add 'show' after 500ms
                    var body = $(this).next('.vertical-accordeon__body');
                    setTimeout(() => {
                        body.addClass('show');
                    }, 500);
                });
            } else {
                // On hover for screens larger than 991px
                $('.vertical-accordeon__header-row').off('click').hover(
                    function () {
                        // On mouseenter
                        $('.vertical-accordeon__header-row').removeClass('active');
                        $(this).addClass('active');

                        // Find the corresponding .vertical-accordeon__body and add 'show' after 500ms
                        $('.vertical-accordeon__body').not($(this).find('.vertical-accordeon__body')).removeClass('show');
                        var body = $(this).find('.vertical-accordeon__body');
                        setTimeout(() => {
                            body.addClass('show');
                        }, 100);
                    },
                    function () {
                        // On mouseleave
                        // $(this).removeClass('active');
                        // $(this).next('.vertical-accordeon__body').removeClass('show');
                    }
                );
            }
        }

        // Initialize the event listeners
        setEventListeners();

        // Re-check on window resize
        $(window).resize(function () {
            setEventListeners();
        });

        // OUR SOLUTION - slider

        var swiper = new Swiper(".oursolutions-slider", {
            slidesPerView: "auto",
            spaceBetween: 20,
            mousewheel: {
                invert: false,
                sensitivity: 1,
            },
            
            

        });








    });

}(jQuery)); 