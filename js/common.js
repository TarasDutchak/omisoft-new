$(document).ready(function () {

    // header scroll - add class
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    // FAQ
    $('.faq__header').click(function () {
        $('.faq__header').not($(this)).removeClass('active')
        $(this).toggleClass('active');

        $('.faqbody').not($(this).next()).slideUp();
        $(this).next().slideToggle();
    })

    // -------------FOOTER--------------------
    $('.footer__dropdown>span').click(function (e) {
        $(this).toggleClass('active');
        e.preventDefault();
        $(this).next('ul').toggle();
    });

    $('.footer__showmore').each(function () {
        var $iconElement = $(this).find('i');
        var originalText = $iconElement.text().trim();
        $(this).click(function () {
            toggleText($iconElement, originalText);
        });
    });

    function toggleText($iconElement, originalText) {
        if ($iconElement.text().trim() === 'Load more') {
            $iconElement.text('Show less');
        } else {
            $iconElement.text('Load more');
        }
    }

    $('.footer__showmore').click(function () {
        $(this).toggleClass('rotate');
        $(this).prev('ul').toggleClass('showall');
    });

    $('.footer__list').each(function () {
        var $serviceList = $(this).find('.service-list');
        var $showMore = $(this).find('.footer__showmore');

        if ($serviceList.length && $showMore.length) {
            if ($serviceList.children().length > 6) {
                $showMore.show();
            } else {
                $showMore.hide();
            }
        }
    });

    // ====================================HEADER====================================
    // menu lists
    function isWideScreenTablet() {
        return window.innerWidth > 991;
    }

    if (isWideScreenTablet()) {
        function setupMenu(menuClass) {
            var links = document.querySelectorAll(`${menuClass} .mainlist>li>a`);

            var uls = document.querySelectorAll(`${menuClass} .sidelists ul`);

            if (uls.length > 0) {
                uls[0].classList.add('show');
            }

            if (links.length > 0) {
                links[0].classList.add('active');
            }

            links.forEach(function (link, index) {
                link.addEventListener('click', function () {
                    if (uls[index]) {
                        uls.forEach(function (ul) {
                            ul.classList.remove('show');
                        });
                        uls[index].classList.add('show');

                        links.forEach(function (link) {
                            link.classList.remove('active');
                        });
                        link.classList.add('active');
                    }
                });
            });
        }

        setupMenu('.megamenu.mlservices');

        setupMenu('.megamenu.mldeals');
    }

    // Sliders - header
    const swiper = new Swiper('.menuslider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    // show megamenu
    function isWideScreen() {
        return window.innerWidth > 1199;
    }

    if (isWideScreen()) {
        $('.dropdown span').click(function () {
            $('.dropdown span').not(this).removeClass('rotate');
            $('.dropdown span').not(this).parent().find('.megamenu').removeClass('show');

            var anyMenuOpen = false;
            $('.dropdown .megamenu').each(function () {
                if ($(this).hasClass('show')) {
                    anyMenuOpen = true;
                    return false;
                }
            });

            if (anyMenuOpen) {
                $('header.header').removeClass('active');
            } else {
                $('header.header').addClass('active');
            }

            $(this).toggleClass('rotate');
            $(this).parent().find('.megamenu').toggleClass('show');
        });


        $(document).click(function (event) {
            let $target = $(event.target);
            if (!$target.closest('.megamenu').length && !$target.closest('.header').length) {
                $('header.header').removeClass('active');
                $('.megamenu').removeClass('show');
                $('.dropdown span').removeClass('rotate');
            }
        });

    }

    if ($(window).width() < 1200) {
        $('.header__nav li.dropdown span').click(function(){
            $(this).toggleClass('rotate');
            $(this).next('.megamenu').toggle();
        });
    }

    if ($(window).width() < 992) {
        $('.megamenu .mainlist>li>a').click(function(){
            $(this).toggleClass('rotate');
            $(this).next('.tablet-submenu').toggle();
        });
    }

    $('.menubtn').click(function(){
        $('header.header').toggleClass('active');
        $(this).toggleClass('open');
        $('.menucolumn').toggleClass('show');
    });


});
