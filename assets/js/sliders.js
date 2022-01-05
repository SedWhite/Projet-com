// CAROUSSEL 
let slide = new Array("foret-peuplier.jpg", "paysage-montagne.jpg", "chemin-automne.jpg", "prairie-alpes.jpg"); // PREVOIR DE FAIRE UN ARRAY DIFFERENT POUR CHAQUE CARROUSEL
let number = 0;

function ChangeSlide(sens) {
    number = number + sens;
    if (number < 0)
        number = slide.length - 1;
    if (number > slide.length - 1)
        number = 0;
    document.getElementById("slide").src = slide[number];
    setInterval("ChangeSlide(1)", 5000); // POUR DEFILEMENT AUTOMATIQUE TOUTES LES 5 SECONDES
}