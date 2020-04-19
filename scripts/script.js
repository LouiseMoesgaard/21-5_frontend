document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav .menu");

    if (window.innerWidth >= 600) {
        nav.classList.remove("hide")
    } else {
        nav.classList.add("hide")
    }
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
    document.querySelectorAll(".popup_btn").forEach(function (elm) {
        elm.addEventListener("click", function () {
            this.querySelector(".popup").classList.toggle("hide");
        })
    })
}
