"use strict";
// Слайдер "О нас"
let slider = tns({
    container: '.courusel__inner',
    controls: false,
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    speed: 900,
    navPosition: "bottom",
});

// Анимация "Отзывы"

new WOW().init();

// Плавный скролл

let links = document.querySelectorAll('[href^="#"]');
let speed = 0.2;
// console.log(links);
links.forEach(link => {
    if (link.getAttribute("href") != "#") {

        link.addEventListener('click', function (event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top, // метод, позволяющий получить количество пикселей до элемента(его верхней границы)
                start = null;

            requestAnimationFrame(step);

            function step(time) { //time - время, прошедшее с момента начала загрузки страницы в милисекундах. Это callback функция requestAnimationFrame

                if (start === null) {
                    start = time;
                }

                let progress = time - start;

                let r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }

        });
    }
});


