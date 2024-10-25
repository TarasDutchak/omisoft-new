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
            slidesPerView: 2.4,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            speed: 1000,

            navigation: {
                nextEl: ".swiper-button-next-t",
                prevEl: ".swiper-button-prev-t",
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
            slidesPerView: 3,
            spaceBetween: 16,
            mousewheel: true,
            freeMode: true,
            loop: true,
            speed: 1000,
            // autoplay: {
            //     disableOnInteraction: false,
            //     delay: 2000, 
            // },
        });

        // Функція для перезапуску автоплей
        let autoplayTimeout;

        swiper.el.addEventListener('wheel', () => {
            console.log('Mouse wheel event detected. Stopping autoplay.');
            swiper.autoplay.stop(); // Зупиняємо автоплей при прокручуванні мишкою

            // Перезапускаємо автоплей через 2 секунди після зупинки прокручування
            clearTimeout(autoplayTimeout);
            autoplayTimeout = setTimeout(() => {
                console.log('Restarting autoplay after 2 seconds.');
                swiper.autoplay.start(); // Запускаємо автоплей
            }, 2000); // Час в мілісекундах (2 секунди)
        });

        // Додаткове оброблення події, щоб також зупинити автоплей при взаємодії
        swiper.on('touchStart', () => {
            console.log('Touch event detected. Stopping autoplay.');
            swiper.autoplay.stop();
        });
        swiper.on('touchEnd', () => {
            console.log('Touch event ended. Restarting autoplay after 2 seconds.');
            clearTimeout(autoplayTimeout);
            autoplayTimeout = setTimeout(() => {
                swiper.autoplay.start();
            }, 2000);
        });
    }



    if ($('.techslider').length) {
        const hovercards = document.querySelectorAll('.hovercard');

        hovercards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Знімаємо клас active з усіх карток
                hovercards.forEach(c => c.classList.remove('active'));
                // Додаємо клас active до поточної картки
                card.classList.add('active');
            });
        });
    }
    














})