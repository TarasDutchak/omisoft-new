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
















});