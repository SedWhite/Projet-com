// MENU BURGER, BEN OUI C'EST DANS LE TITRE
let menuBurger = document.getElementById("menuBurger");
// console.log("test");
menuBurger.addEventListener("click", function(){
    let dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("displayNone");
});


// DROPDOWN DES MEMBRES
let member = document.getElementById("desktopMember");
member.addEventListener("mouseenter", function(){
    let dropdownMember = document.querySelector(".memberDropdown");
    dropdownMember.classList.remove("displayNone");
});
member.addEventListener("mouseleave", function(){
    let dropdownMember = document.querySelector(".memberDropdown");
    dropdownMember.classList.add("displayNone");
});
// VERSION MOBILE
let mobileMember = document.getElementById("mobileMember");
mobileMember.addEventListener("click", function(){
    let dropdownMobileMember = document.querySelector(".memberMobileDropdown");
    dropdownMobileMember.classList.toggle("displayNone");
});

// ANIMATION CROIX
link.addEventListener('click', function(e) {
    e.preventDefault()
    burger.classList.toggle('open')
})