var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 6,
    loop: true,
    speed: 3000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        },
    },
});



var swiper2 = new Swiper(".mySwiper-2", {
    spaceBetween: 0,
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    allowTouchMove: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
    },
});