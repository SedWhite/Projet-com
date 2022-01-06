// MENU BURGER, BEN OUI C'EST DANS LE TITRE
let menuBurger = document.getElementById("menuBurger");
console.log("test");
menuBurger.addEventListener("click", function(){
    let dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("displayNone");
});


// DROPDOWN DES MEMBRES
let member = document.getElementById("desktopMember");
member.addEventListener("mouseenter", function(){
    let dropdownMember = document.querySelector(".memberDropdown");
    dropdownMember.classList.toggle("displayNone");
});
// VERSION MOBILE
let mobileMember = document.getElementById("mobileMember");
mobileMember.addEventListener("click", function(){
    let dropdownMobileMember = document.querySelector(".memberMobileDropdown");
    dropdownMobileMember.classList.toggle("displayNone");
});