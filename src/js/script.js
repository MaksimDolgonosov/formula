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

    if (window.innerWidth > 992) {
        // Слайдер "парикмахеры"
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
            document.querySelector('.prev-hairs').addEventListener("click", function () {
                slider.goTo("prev");
            });
            document.querySelector('.next-hairs').addEventListener("click", function () {
                slider.goTo("next");
            });
        } catch (e) { }

        // Слайдер "маникюр"
        try {
            let slider = tns({
                container: '.inner__nails',
                controls: false,
                items: 4,
                slideBy: 'page',
                autoplay: false,
                autoplayButtonOutput: false,
                speed: 900,
                nav: false,
                gutter: 15

            });
            document.querySelector('.prev-nails').addEventListener("click", function () {
                slider.goTo("prev");
            });
            document.querySelector('.next-nails').addEventListener("click", function () {
                slider.goTo("next");
            });
        } catch (e) { }

    } else if (window.innerWidth < 993 && window.innerWidth > 768) {

        // Слайдер "парикмахеры"
        try {
            let slider = tns({
                container: '.inner__hairs',
                controls: false,
                items: 3,
                slideBy: 'page',
                autoplay: false,
                autoplayButtonOutput: false,
                speed: 900,
                nav: false,
                gutter: 15

            });
            document.querySelector('.prev-hairs').addEventListener("click", function () {
                slider.goTo("prev");
            });
            document.querySelector('.next-hairs').addEventListener("click", function () {
                slider.goTo("next");
            });
        } catch (e) { }

        // Слайдер "маникюр"
        try {
            let slider = tns({
                container: '.inner__nails',
                controls: false,
                items: 3,
                slideBy: 'page',
                autoplay: false,
                autoplayButtonOutput: false,
                speed: 900,
                nav: false,
                gutter: 15

            });
            document.querySelector('.prev-nails').addEventListener("click", function () {
                slider.goTo("prev");
            });
            document.querySelector('.next-nails').addEventListener("click", function () {
                slider.goTo("next");
            });
        } catch (e) { }

    } else if (window.innerWidth < 769 && window.innerWidth > 576) {
        // Слайдер "парикмахеры"
        try {
            let slider = tns({
                container: '.inner__hairs',
                controls: false,
                items: 2,
                slideBy: 'page',
                autoplay: false,
                autoplayButtonOutput: false,
                speed: 900,
                nav: false,
                gutter: 15

            });
            document.querySelector('.prev-hairs').addEventListener("click", function () {
                slider.goTo("prev");
            });
            document.querySelector('.next-hairs').addEventListener("click", function () {
                slider.goTo("next");
            });
        } catch (e) { }

        // Слайдер "маникюр"
        try {
            let slider = tns({
                container: '.inner__nails',
                controls: false,
                items: 2,
                slideBy: 'page',
                autoplay: false,
                autoplayButtonOutput: false,
                speed: 900,
                nav: false,
                gutter: 15

            });
            document.querySelector('.prev-nails').addEventListener("click", function () {
                slider.goTo("prev");
            });
            document.querySelector('.next-nails').addEventListener("click", function () {
                slider.goTo("next");
            });
        } catch (e) { }
    } else if (window.innerWidth < 577) {
        try {
            let slider = tns({
                container: '.inner__hairs',
                controls: false,
                items: 1,
                slideBy: 'page',
                autoplay: false,
                autoplayButtonOutput: false,
                speed: 900,
                nav: false,
                gutter: 15

            });
            document.querySelector('.prev-hairs').addEventListener("click", function () {
                slider.goTo("prev");
            });
            document.querySelector('.next-hairs').addEventListener("click", function () {
                slider.goTo("next");
            });
        } catch (e) { }

        // Слайдер "маникюр"
        try {
            let slider = tns({
                container: '.inner__nails',
                controls: false,
                items: 1,
                slideBy: 'page',
                autoplay: false,
                autoplayButtonOutput: false,
                speed: 900,
                nav: false,
                gutter: 15

            });
            document.querySelector('.prev-nails').addEventListener("click", function () {
                slider.goTo("prev");
            });
            document.querySelector('.next-nails').addEventListener("click", function () {
                slider.goTo("next");
            });
        } catch (e) { }
    }



    // Картинка в полный размер
    try {
        const workClass = document.querySelector(".works");
        const imgDiv = document.createElement("div");
        const bigImg = document.createElement("img");

        workClass.appendChild(imgDiv);
        imgDiv.classList.add("popup");

        imgDiv.style.justifyContent = "center";
        imgDiv.style.alignItems = "center";
        imgDiv.style.display = "none";
        imgDiv.appendChild(bigImg);

        workClass.addEventListener("click", e => {
            e.preventDefault();
            console.log(e.target.parentNode.parentNode);
            if (e.target && e.target.parentNode.parentNode.classList.contains("works__img")) {
                imgDiv.style.display = "flex";
                document.body.style.overflow = "hidden";
                const srcImage = e.target.parentNode.getAttribute('href');
                bigImg.setAttribute("src", srcImage);
                if (window.innerWidth < 605) {
                    bigImg.style.width = "100vw";
                }


            }
            if (e.target && e.target.classList.contains("popup")) {
                imgDiv.style.display = "none";
                document.body.style.overflow = "";
            }
        });

    } catch (e) { }

    // Сортировка мастеров 
    try {
        const allBtns = document.querySelectorAll(".masters__choise button");
        const allMasters = document.querySelector(".allMasters");
        const hairMasters = document.querySelector(".hairMasters");
        const nailMasters = document.querySelector(".nailMasters");
        const allItems = document.querySelectorAll(".masters__wrapper-item");
        const hairItems = document.querySelectorAll('[data-master="hair"]');
        const nailItems = document.querySelectorAll('[data-master="nail"]');


        allMasters.addEventListener("click", () => {
            allBtns.forEach(btn => btn.classList.remove("active"));
            allMasters.classList.add("active");
            allItems.forEach(item => item.style.display = "block");
        });
        hairMasters.addEventListener("click", () => {
            allBtns.forEach(btn => btn.classList.remove("active"));
            hairMasters.classList.add("active");
            allItems.forEach(item => item.style.display = "none");
            hairItems.forEach(item => item.style.display = "block");
        });
        nailMasters.addEventListener("click", () => {
            allBtns.forEach(btn => btn.classList.remove("active"));
            nailMasters.classList.add("active");
            allItems.forEach(item => item.style.display = "none");
            nailItems.forEach(item => item.style.display = "block");
        });

    } catch (e) { }

});