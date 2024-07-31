$(document).ready(function () {
    $('.animate-setting').on('click', function () {
        $('.day-light-mode').toggleClass('right-218')
    });

    $('.sidebar-header button').on('click', function () {
        $('.sidebar').toggleClass('left-50')
    })
    $('.sidebar-open').on('click', function () {
        $('.sidebar').toggleClass('left-50');
    })

    $('.sun').on('click', function () {
        $('body').addClass('primary-background-color');
        $('.box').addClass('box-background-color');
        $('aside').addClass('box-background-color');
        $('.profile-skills').addClass('aside-box-color');
        $('p').addClass('p-font-color');
        $('h1').addClass('color-black');
        $('.skill-icon img').addClass('filter-0');
        $('.home-icon').addClass('border-color');
        $('.contact-info li .color-70').addClass('p-font-color');
        $('.text-white').addClass('color-black');
        $('.color-black').removeClass('text-white');
        $('.dot-line').addClass('dot-line1');
        $('.dot-line1').removeClass('dot-line');
        $('.specialization').addClass('specialization1');
        $('.specialization1').removeClass('specialization');
        $('.p-language').addClass('p-language1');
        $('.p-language1').removeClass('p-language');
        $(':root').css('--theme-color', '#00BC91');
        $(':root').css('--line-color', 'rgba(0, 0, 0, 0.144)');
        $(':root').css('--box-color', 'white');
        $('.sun').css('background-color', '#f0f2f5');
        $(':root').css('--text-color', '#000');

    })
    $('.moon').on('click', function () {
        $('body').removeClass('primary-background-color');
        $('.box').removeClass('box-background-color');
        $('aside').removeClass('box-background-color');
        $('.profile-skills').removeClass('aside-box-color');
        $('p').removeClass('p-font-color');
        $('h1').removeClass('color-black');
        $('.skill-icon img').removeClass('filter-0');
        $('.home-icon').removeClass('border-color');
        $('.contact-info li .color-70').removeClass('p-font-color');
        $('.color-black').addClass('text-white');
        $('.text-white').removeClass('color-black');
        $('.dot-line').removeClass('dot-line1');
        $('.dot-line1').addClass('dot-line');
        $('.specialization').removeClass('specialization1');
        $('.specialization1').addClass('specialization');
        $('.p-language').removeClass('p-language1');
        $('.p-language1').addClass('p-language');
        $(':root').css('--theme-color', '#fff');
        $(':root').css('--line-color', 'rgba(255, 255, 255, 0.158)');
        $(':root').css('--box-color', '#212223');
        $('.sun').css('background-color', 'transparent');
        $(':root').css('--text-color', '#fff');
    });

    $(window).scroll(function () {
        if (scrollY > 1000) {
            $('.bottom-top').fadeIn();
        } else {
            $('.bottom-top').fadeOut();
        }
    });

    $('.bottom-top').on('click', function () {
        $('html').animate({ scrollTop: 0 }, 50);
    });

    

        if ($(window).width() < 1400) {
            $("body").attr("data-bs-target", "#navbar-example3");
        } else {
            $("body").attr("data-bs-target", "#navbar-example2");
        }
    
})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));