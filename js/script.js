'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navbar__btn'),
          navbar = document.querySelector('.navbar__services'),
          close = document.querySelector('[data-close]'),
          overlay = document.querySelector('.overlay');  

    function showMenu() {
        navbar.classList.add('navbar__services_active');
        document.body.style.overflow = 'hidden';
    }
    menu.addEventListener('click', showMenu);

    function closeMenu() {
        navbar.classList.remove('navbar__services_active');
        document.body.style.overflow = '';
    }

    close.addEventListener('click', closeMenu);

    overlay.addEventListener('click', (e) => {
        if (navbar.classList.contains('navbar__menu_active'))
        closeMenu();
    });





    const swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        direction: 'horizontal',
        loop: false,
        type: 'fraction',
        // cssMode: true,
        // Navigation arrows
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },
    });

    const swiper2 = new Swiper('.MySwiper2', {
        slidesPerView: 'auto',
        direction: 'horizontal',
        loop: false,
        type: 'fraction',
        // Navigation arrows
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },
    });

    const swiper3 = new Swiper('.MySwiper3', {
        slidesPerView: 'auto',
        direction: 'horizontal',
        loop: false,
        type: 'fraction',
        // Navigation arrows
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },
    });
});