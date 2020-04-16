const nav = document.querySelector('nav');
window.onscroll = () => {
    if (this.scrollY <= 20) {
        changeBack();
        nav.classList.remove('scroll');
    } else {
        change();
        nav.classList.add('scroll');
    }
};

function change() {
    document.querySelector(".logo img").src = "/ikoner/logo_mint.svg";
    document.querySelector(".login").src = "/ikoner/profil_mint.svg";
    document.querySelector(".burger_open").src = "/ikoner/burger_mint.svg";
}

function changeBack() {
    document.querySelector(".logo img").src = "/ikoner/logo_hvid.svg";
    document.querySelector(".login").src = "/ikoner/profil_hvid.svg";
    document.querySelector(".burger_open").src = "/ikoner/burger_hvid.svg";
}
