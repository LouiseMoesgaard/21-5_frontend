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
}
