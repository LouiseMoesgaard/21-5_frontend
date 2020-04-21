document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav .menu");

    document.querySelector(".burger_open").addEventListener("click", function () {
        nav.classList.remove("hide")
    })
    document.querySelector(".burger_close").addEventListener("click", function () {
        nav.classList.add("hide")
    })

    document.querySelector(".language").addEventListener("click", function () {
        this.classList.toggle("open");
    })
});


function customContentListeners() {
    console.log("customContentListeners")
    document.querySelectorAll(".popup_btn").forEach(function (elm) {
        elm.addEventListener("click", function () {
            this.querySelector(".popup").classList.toggle("hide");
        })
    })

    let colapse_btn = document.querySelectorAll(".colapse_btn");

    for (let index = 0; index <= colapse_btn.length - 1; index++) {
        colapse_btn[index].addEventListener("click", function () {
            this.classList.toggle("open");
            let icon = this.querySelector("i");
            if (icon.classList.contains("fa-angle-down")) {
                icon.classList.remove("fa-angle-down");
                icon.classList.add("fa-angle-up");
            } else {
                icon.classList.remove("fa-angle-up");
                icon.classList.add("fa-angle-down");
            }
        });
    }

    let multi_colapse_btn = document.querySelectorAll(".multi_colapse_btn");
    console.log("test")
    for (let index = 0; index <= multi_colapse_btn.length - 1; index++) {
        multi_colapse_btn[index].addEventListener("click", function (e) {
            console.log("got here")
            this.classList.toggle("open");
            let icon = this.querySelector("i");
            if (icon.classList.contains("fa-angle-down")) {
                icon.classList.remove("fa-angle-down");
                icon.classList.add("fa-angle-up");
            } else {
                icon.classList.remove("fa-angle-up");
                icon.classList.add("fa-angle-down");
            }
        });
    }

    let multi_colapse_li = document.querySelectorAll(".colapse_wrap > li");
    for (let index = 0; index <= multi_colapse_li.length - 1; index++) {
        multi_colapse_li[index].addEventListener("click", function (e) {
            e.stopPropagation();
            var anchor = e.target.querySelector("a")
            if (anchor) {
                window.location = anchor.href;
            }
            this.classList.toggle("open");
            let icon = this.querySelector("i");
            if (icon.classList.contains("fa-angle-down")) {
                icon.classList.remove("fa-angle-down");
                icon.classList.add("fa-angle-up");
            } else {
                icon.classList.remove("fa-angle-up");
                icon.classList.add("fa-angle-down");
            }
        });
    }

    carouselReno();
}

function carouselReno() {
    const url = "";
    let JSON;
    let numberOfImages;
    document.addEventListener("DOMContentLoaded", function () {
        getJSON();
    })
}

async function getJSON() {
    const response = await fetch(url);
    JSON = await response.json();
    buildCarousel();
}

function buildCarousel() {
    numberOfImages = JSON.
}
