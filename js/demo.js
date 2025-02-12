
(function ($) {

    $(document).ready(function () {

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
                $('.vertical-accordeon__header-row').off('mouseenter mouseleave').click(function () {
                    $('.vertical-accordeon__header-row').removeClass('active');
                    $(this).addClass('active');

                    var body = $(this).next('.vertical-accordeon__body');
                    setTimeout(() => {
                        body.addClass('show');
                    }, 0);
                });

                $('.vertical-accordeon__header').click(function(){
                    $('.vertical-accordeon__body').not($(this).next()).slideUp();
                    $(this).next().slideToggle();
                });



            } else {
                $('.vertical-accordeon__header-row').off('click').hover(
                    function () {
                        $('.vertical-accordeon__header-row').removeClass('active');
                        $(this).addClass('active');

                        $('.vertical-accordeon__body').not($(this).find('.vertical-accordeon__body')).removeClass('show');
                        var body = $(this).find('.vertical-accordeon__body');
                        setTimeout(() => {
                            body.addClass('show');
                        }, 0);
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