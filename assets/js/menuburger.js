// MENU BURGER, BEN OUI C'EST DANS LE TITRE
let menuBurger = document.getElementById("menuBurger");
console.log("test");
menuBurger.addEventListener("click", function(){
    let dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("displayNone");
});