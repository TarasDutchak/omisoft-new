// if (document.querySelector('.gradient-bg')) {

//     const interBubbles = document.querySelectorAll('.interactive'); // Знаходимо всі елементи з класом 'interactive'

//     interBubbles.forEach((interBubble) => {
//         let curX = 0;
//         let curY = 0;
//         let tgX = 0;
//         let tgY = 0;

//         // Анімація для кожного interactive елемента
//         const move = () => {
//             curX += (tgX - curX) / 20;
//             curY += (tgY - curY) / 20;
//             interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
//             requestAnimationFrame(move);
//         };

//         window.addEventListener('mousemove', (event) => {
//             tgX = event.clientX;
//             tgY = event.clientY;
//         });

//         move(); // Запуск анімації
//     });

// }

(function ($) {

    $(document).ready(function () {
        console.log('test')
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
        // if ($('.card').length) {
        //     const cardsbox = document.querySelectorAll('.card');

        //     cardsbox.forEach((cardsbox, index) => {
        //         cardsbox.style.zIndex = index + 1; // Призначаємо кожному наступному більший z-index
        //         cardsbox.style.paddingTop = `${20 * (index + 1)}px`; // Збільшуємо padding-top на 20px для кожного наступного
        //     });
        // }

        // if ($('.card').length) {
        //     const cardsbox = document.querySelectorAll('.card');

        //     cardsbox.forEach((card, index) => {
        //         if (index === 0) {
        //             card.style.top = '130px'; // Перший елемент отримує top 100px
        //         } else {
        //             card.style.top = `${130 + 10 * index}px`; // Наступним додаємо по 20px до top
        //         }
        //         // card.style.position = 'relative'; // Встановлюємо позицію відносно, щоб працював top
        //         card.style.zIndex = index + 1; // Призначаємо кожному наступному більший z-index
        //     });
        // }

        // if ($('.card').length) {
        //     const cardsbox = document.querySelectorAll('.card');

        //     cardsbox.forEach((card, index) => {
        //         if (index === 0) {
        //             card.style.top = '130px'; // Перший елемент отримує top 130px
        //         } else if (index === 1) {
        //             card.style.top = '295px'; // Другий елемент отримує top 230px
        //         } else {
        //             card.style.top = `${295 + 10 * (index - 1)}px`; // Наступним додаємо по 10px до top
        //         }
        //         card.style.zIndex = index + 1; // Призначаємо кожному наступному більший z-index
        //     });
        // }



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




        // document.addEventListener('scroll', () => {
        //     const cards = document.querySelectorAll('#cards .card');
        //     const textboxes = document.querySelectorAll('.successstory__right .textboxes');

        //     cards.forEach((card, index) => {
        //         const rect = card.getBoundingClientRect();
        //         // Перевіряємо, чи знаходиться елемент у видимій області екрана
        //         if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        //             // Ховаємо всі textboxes, окрім поточного
        //             textboxes.forEach((box, i) => {
        //                 box.classList.toggle('hide', i !== index);
        //             });
        //         }
        //     });
        // });

        document.addEventListener('scroll', () => {
            const cards = document.querySelectorAll('#cards .card');
            const textboxes = document.querySelectorAll('.successstory__right .textboxes');

            // Set the distance from the top based on screen width
            const threshold = window.innerWidth <= 768 ? 500 : 360;

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();

                // Check if the card is within the threshold distance from the top of the screen
                if (rect.top >= 0 && rect.top <= threshold) {
                    // Hide all textboxes except the current one
                    textboxes.forEach((box, i) => {
                        box.classList.toggle('hide', i !== index);
                    });
                }
            });
        });



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

}(jQuery));

