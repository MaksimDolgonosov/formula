"use strict";
window.addEventListener("DOMContentLoaded", () => {


    // Слайдер "О нас"
    try {
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
    } catch (e) { }
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
    // Бургер меню
    let burger = document.querySelector(".nav__hamburger");
    let navMob = document.querySelector(".nav__items__mob");
    burger.addEventListener("click", () => {
        burger.classList.toggle("nav__hamburger_active");
        navMob.classList.toggle("nav__items__mob_active");
    });


    // Аккордеон
    let btns = document.querySelectorAll(".prices__accordion-header");

    btns.forEach(btn => {
        btn.addEventListener("click", function () {
            if (this.classList.contains("prices__accordion-header")) {
                this.classList.remove("prices__accordion-header");
                this.classList.add("prices__accordion-header__active");
                this.nextElementSibling.classList.remove("prices__accordion-block");
                this.nextElementSibling.classList.add("prices__accordion-block__active");
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
            } else {
                this.classList.remove("prices__accordion-header__active");
                this.classList.add("prices__accordion-header");
                this.nextElementSibling.classList.remove("prices__accordion-block__active");
                this.nextElementSibling.classList.add("prices__accordion-block");
                this.nextElementSibling.style.maxHeight = "0px";
            }

        });
    });

    // Слайдер Наши работы
     // Слайдер "О нас"
     try {
        let slider = tns({
            container: '.inner__hairs',
            controls: false,
            items: 4,
            slideBy: 'page',
            autoplay: false,
            autoplayButtonOutput: false,
            speed: 900,
            nav: false,
            gutter: 15
            
        });
        document.querySelector('.prev').addEventListener("click", function () {
            slider.goTo("prev");
        });
        document.querySelector('.next').addEventListener("click", function () {
            slider.goTo("next");
        });
    } catch (e) { }
});