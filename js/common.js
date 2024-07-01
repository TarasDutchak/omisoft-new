$(document).ready(function () {

    // header scroll - add class
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    // header scroll - hidden header
    // if ($('header').length) {

    //     var prevScrollpos = window.pageYOffset;

    //     var headerDiv = document.querySelector("header");
    //     var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

    //     window.onscroll = function () {
    //         var currentScrollPos = window.pageYOffset;

    //         if (prevScrollpos > currentScrollPos || currentScrollPos < headerBottom) {
    //             headerDiv.style.top = "0";
    //         }
    //         else {
    //             headerDiv.style.top = "-7.2rem";
    //         }

    //         prevScrollpos = currentScrollPos;
    //     }
    // }

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

    // if (isWideScreenTablet()) {
    //     // Отримуємо всі елементи <a> в блоці .mainlist
    //     var links = document.querySelectorAll('.mainlist a');

    //     // Отримуємо всі елементи <ul> в блоці .sidelists
    //     var uls = document.querySelectorAll('.sidelists ul');

    //     // Перевіряємо, чи існує хоча б один <ul>
    //     if (uls.length > 0) {
    //         // Встановлюємо клас 'show' для першого <ul>
    //         uls[0].classList.add('show');
    //     }

    //     // Перевіряємо, чи існує хоча б один <a> в .mainlist
    //     if (links.length > 0) {
    //         // Додаємо клас 'active' для першого <a>
    //         links[0].classList.add('active');
    //     }

    //     // Перебираємо кожен <a> і додаємо обробник подій для кожного кліку
    //     links.forEach(function (link, index) {
    //         link.addEventListener('click', function () {
    //             // Перевіряємо, чи існує <ul> з індексом, який відповідає індексу <a>
    //             if (uls[index]) {
    //                 // Видаляємо клас 'show' у всіх <ul>
    //                 uls.forEach(function (ul) {
    //                     ul.classList.remove('show');
    //                 });
    //                 // Додаємо клас 'show' тільки відповідному <ul>
    //                 uls[index].classList.add('show');

    //                 // Видаляємо клас 'active' у всіх <a>
    //                 links.forEach(function (link) {
    //                     link.classList.remove('active');
    //                 });
    //                 // Додаємо клас 'active' тільки обраному <a>
    //                 link.classList.add('active');
    //             }
    //         });
    //     });
    // }




    if (isWideScreenTablet()) {
        function setupMenu(menuClass) {
            var links = document.querySelectorAll(`${menuClass} .mainlist a`);
    
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

    // $('.dropdown span').click(function(){
    //     $('header').

    //     $('.dropdown span').not($(this)).removeClass('rotate');
    //     $(this).toggleClass('rotate');
        
    //     $('.megamenu').not($(this).next('.megamenu')).removeClass('show');
    //     $(this).next('.megamenu').toggleClass('show');
    // });
    


});
