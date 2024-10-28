// ----------------------hero bg - animation----------------------
if ($('.gradient-bg').length) {
    // document.addEventListener('DOMContentLoaded', () => {
    //     const interBubble = document.querySelector('.interactive');
    //     let curX = 0;
    //     let curY = 0;
    //     let tgX = 0;
    //     let tgY = 0;

    //     const move = () => {
    //         curX += (tgX - curX) / 20;
    //         curY += (tgY - curY) / 20;
    //         interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    //         requestAnimationFrame(move);
    //     };

    //     window.addEventListener('mousemove', (event) => {
    //         tgX = event.clientX;
    //         tgY = event.clientY;
    //     });

    //     move();
    // });
    const interBubbles = document.querySelectorAll('.interactive'); // Знаходимо всі елементи з класом 'interactive'

    interBubbles.forEach((interBubble) => {
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        // Анімація для кожного interactive елемента
        const move = () => {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            requestAnimationFrame(move);
        };

        window.addEventListener('mousemove', (event) => {
            tgX = event.clientX;
            tgY = event.clientY;
        });

        move(); // Запуск анімації
    });

}


$(document).ready(function () {
    // ----------------------hero cards - animation----------------------
    if ($('.services__hero').length) {
        let cards = document.querySelectorAll('.servheroinfo');
        let parent = document.querySelector('.services__hero');

        parent.addEventListener('mousemove', function (e) {
            let rect = parent.getBoundingClientRect();

            let xAxis = (rect.width / 2 - (e.clientX - rect.left)) / 20;
            let yAxis = (rect.height / 2 - (e.clientY - rect.top)) / 10;

            xAxis = Math.max(-40, Math.min(40, xAxis));
            yAxis = Math.max(-40, Math.min(40, yAxis));

            cards.forEach(card => {
                card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            });
        });
    }


    // ----------------------Success stories----------------------
    if ($('.card').length) {
        const cardsbox = document.querySelectorAll('.card');

        cardsbox.forEach((cardsbox, index) => {
            cardsbox.style.zIndex = index + 1; // Призначаємо кожному наступному більший z-index
            cardsbox.style.paddingTop = `${20 * (index + 1)}px`; // Збільшуємо padding-top на 20px для кожного наступного
        });
    }


    // ----------------------testimonials----------------------
    if ($('.testim-centered').length) {
        var swiper = new Swiper(".testim-centered", {
            slidesPerView: 1.1,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            speed: 1000,

            navigation: {
                nextEl: ".swiper-button-next-t",
                prevEl: ".swiper-button-prev-t",
            },

            pagination: {
                el: ".swiper-pagination",
            },

            breakpoints: {
                400: {
                    slidesPerView: 1.4,
                },
                576: {
                    slidesPerView: 1.5,
                },
                1400: {
                    slidesPerView: 2.4,
                },

            },
        });
    }

    // ----------------------Auto tabs----------------------
    if ($('.autotabs').length) {
        var currentIndex = 0;
        var totalTabs = $('.autotabs ul li').length;
        var interval;

        function switchTab(index) {
            // Активний пункт меню
            $('.autotabs ul li').removeClass('active').eq(index).addClass('active');

            // Зображення
            $('.tabimgs .imgwrap').hide().eq(index).fadeIn();

            // Тексти
            $('.tabtexts .tabtext').hide().eq(index).fadeIn();
        }

        function startAutoSwitch() {
            interval = setInterval(function () {
                currentIndex = (currentIndex + 1) % totalTabs;
                switchTab(currentIndex);
            }, 5000);
        }

        startAutoSwitch();

        $('.autotabs ul li a').click(function (e) {
            e.preventDefault();
            clearInterval(interval);
            currentIndex = $(this).parent().index(); // отримуємо індекс обраного елементу
            switchTab(currentIndex);
        });

        switchTab(currentIndex);
    }


    // ----------------------BANER SLIDER----------------------
    if ($('.servbansl').length) {
        var swiper = new Swiper(".servbansl", {
            speed: 1000,
            spaceBetween: 20,
            loop: true,

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

    // tech stack
    if ($('.techslider').length) {
        var swiper = new Swiper(".techslider", {
            slidesPerView: 2.3,
            spaceBetween: 16,
            mousewheel: true,
            freeMode: true,
            loop: true,
            speed: 1000,
            // autoplay: {
            //     delay: 2000,
            //     disableOnInteraction: false,
            // },
            breakpoints: {
                480: {
                    slidesPerView: 2.2,
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 2.2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                992: {
                    slidesPerView: 2.2,
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 2.8,
                    spaceBetween: 16,
                },
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 16,
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



    // const hovercards = document.querySelectorAll('.hovercard');

    // hovercards.forEach(card => {
    //     card.addEventListener('mouseenter', () => {
    //         // Знімаємо клас active з усіх карток
    //         hovercards.forEach(c => c.classList.remove('active'));
    //         // Додаємо клас active до поточної картки
    //         card.classList.add('active');
    //     });
    // });

    const hovercards = document.querySelectorAll('.hovercard');

    function setHoverCardBehavior() {
        hovercards.forEach(card => {
            const newCard = card.cloneNode(true);
            card.replaceWith(newCard);
        });

        const updatedHovercards = document.querySelectorAll('.hovercard');

        if (window.innerWidth > 1200) {
            updatedHovercards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    updatedHovercards.forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                });
            });
        } else {
            updatedHovercards.forEach(card => {
                card.addEventListener('click', () => {
                    updatedHovercards.forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                });
            });
        }
    }

    setHoverCardBehavior();

    window.addEventListener('resize', setHoverCardBehavior);















})