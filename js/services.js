

(function ($) {

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

            // Функція для розрахунку top значень
            const setCardPositions = () => {
                const screenWidth = window.innerWidth; // Отримуємо ширину вікна
                let firstTop, secondTop;

                // Встановлюємо значення top в залежності від ширини екрану
                if (screenWidth > 991) {
                    firstTop = 130; // Для ширини > 992px
                    secondTop = 295;
                } else if (screenWidth >= 768) {
                    firstTop = 80; // Для ширини від 768px до 992px
                    secondTop = 348;
                } else if (screenWidth >= 576) {
                    firstTop = 80; // Для ширини від 576px до 767px
                    secondTop = 330;
                }
                else if (screenWidth >= 480) {
                    firstTop = 80; // Для ширини від 576px до 767px
                    secondTop = 315;
                } else {
                    firstTop = 80; // Для ширини < 576px
                    secondTop = 395;
                }

                cardsbox.forEach((card, index) => {
                    if (index === 0) {
                        card.style.top = `${firstTop}px`; // Перший елемент отримує top
                    } else if (index === 1) {
                        card.style.top = `${secondTop}px`; // Другий елемент отримує top
                    } else {
                        card.style.top = `${secondTop + 10 * (index - 1)}px`; // Наступним додаємо по 10px до top
                    }
                    card.style.zIndex = index + 1; // Призначаємо кожному наступному більший z-index
                });
            };

            setCardPositions(); // Встановлюємо позиції карток

            // Додаємо обробник події resize, щоб оновити позиції карток при зміні розміру вікна
            window.addEventListener('resize', setCardPositions);
        }

        // const cards = document.querySelectorAll('#cards .card');
        // const nameProjects = document.querySelectorAll('.nameproject span');
        // const textboxes = document.querySelectorAll('.textboxes');
        
        // window.addEventListener('scroll', () => {
        //     const halfScreen = window.innerHeight / 2;
        //     let activeIndex = -1;
        
        //     // Перевіряємо всі картки
        //     cards.forEach((card, index) => {
        //         const cardTop = card.getBoundingClientRect().top; // Відстань від верхнього краю вікна
        //         const cardHeight = card.offsetHeight;
        
        //         // Перевіряємо, чи картка перекриває 50% екрана
        //         if (cardTop <= halfScreen && (cardTop + cardHeight) >= halfScreen) {
        //             activeIndex = index;
        //         }
        //     });
        
        //     // Гарантуємо, що хоча б один елемент буде активним
        //     if (activeIndex === -1) {
        //         activeIndex = 0; // Якщо жодна картка не активна, вибираємо першу
        //     }
        
        //     // Оновлюємо стани для span та textboxes
        //     nameProjects.forEach((span, index) => {
        //         span.classList.toggle('show', index === activeIndex);
        //     });
        
        //     textboxes.forEach((box, index) => {
        //         box.classList.toggle('hide', index !== activeIndex);
        //     });
        // });
        

        const cards = document.querySelectorAll('#cards .card');
const nameProjects = document.querySelectorAll('.nameproject span');
const textboxes = document.querySelectorAll('.textboxes');

window.addEventListener('scroll', () => {
    // Визначаємо адаптивну зону активації
    const screenPercentage = window.innerWidth <= 768 ? 0.7 : 0.5; // 30% для мобільних, 50% для десктопа
    const activationZone = window.innerHeight * screenPercentage;

    let activeIndex = -1;

    // Перевіряємо всі картки
    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top; // Відстань від верхнього краю вікна
        const cardHeight = card.offsetHeight;

        // Перевіряємо, чи картка перекриває зону активації
        if (cardTop <= activationZone && (cardTop + cardHeight) >= activationZone) {
            activeIndex = index;
        }
    });

    // Гарантуємо, що хоча б один елемент буде активним
    if (activeIndex === -1) {
        activeIndex = 0; // Якщо жодна картка не активна, вибираємо першу
    }

    // Оновлюємо стани для span та textboxes
    nameProjects.forEach((span, index) => {
        span.classList.toggle('show', index === activeIndex);
    });

    textboxes.forEach((box, index) => {
        box.classList.toggle('hide', index !== activeIndex);
    });
});

       

        // ----------------------Auto tabs----------------------






        var swiper12 = new Swiper(".mySwiper12", {
            spaceBetween: 10,
            effect: "fade",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: window.innerWidth > 320 ? { delay: 3000 } : false,
            on: {
                slideChange: function () {
                    updateActiveClass(this.activeIndex);
                },
            },
        });

        let autoplayStopped = false; // Флаг для відстеження, чи автоплей зупинено назавжди

        // Функція для оновлення класу active
        function updateActiveClass(activeIndex) {
            document.querySelectorAll(".slide-selector li").forEach((item, index) => {
                item.classList.toggle("active", index === activeIndex);
            });
        }

        // Додаємо події на ховер і клік для кожного li у списку .slide-selector
        document.querySelectorAll(".slide-selector li").forEach((item, index) => {
            const stopAutoplayAndSwitchSlide = () => {
                swiper12.slideTo(index);

                if (!autoplayStopped) {  // Перевіряємо, чи ще не зупинили автоплей назавжди
                    swiper12.autoplay.stop();
                    autoplayStopped = true; // Після зупинки ставимо флаг у true, щоб не запускати автоплей знову
                }
            };

            item.addEventListener("mouseenter", stopAutoplayAndSwitchSlide);
            item.addEventListener("click", stopAutoplayAndSwitchSlide);
        });



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
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
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


        

    })

}(jQuery));

