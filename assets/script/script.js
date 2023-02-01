
window.addEventListener('DOMContentLoaded', function() {

/* --------------------------------------------------------- */
/* ---------------------- MENU BURGER ---------------------- */
/* --------------------------------------------------------- */

// code pris sur : https://codepen.io/codeur-com/pen/GRxzqpZ

    let menuBurger = document.getElementById("menuBurger"),
        iconeBurger = document.getElementById("iconeBurger"),
        iconeCroix = document.getElementById("iconeCroix");

    iconeBurger.onclick = openNav;
    iconeCroix.onclick = closeNav;

    function openNav() {
        menuBurger.classList.add("active");
    }

    function closeNav() {
        menuBurger.classList.remove("active");
    }

});