// CAROUSSEL HEADER
window.onload = function(){
    var slides = document.getElementsByClassName('carousel-item'),
        addActive = function(slide) {slide.classList.add('active')},
        removeActive = function(slide) {slide.classList.remove('active')};
    addActive(slides[0]);
    
    setInterval(function (){
      for (var i = 0; i < slides.length; i++){
        if (i + 1 == slides.length) {
          addActive(slides[0]);
        //   slides[0].style.zIndex = 100;
          setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
          break;
        }
        if (slides[i].classList.contains('active')) { 
          slides[i].removeAttribute('style');
          setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
          addActive(slides[i + 1]);
          break;
        }
      } 
    }, 4000);
}

// CAROUSSEL GALERIE
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// -----------------------------------------------------------------------------------------------------------------------------
//CAROUSSEL DES MEMBRES
let secondSlideIndex = 1;
showMembersSlides(secondSlideIndex);

// Next/previous controls
function plusSlidesMembers(m) {
  showMembersSlides(secondSlideIndex += m);
}

// Thumbnail image controls
function currentMembersSlide(m) {
  showMembersSlides(secondSlideIndex = m);
}

function showMembersSlides(m) {
  let j;
  let membersSlides = document.getElementsByClassName("membersSlides");
  dots = document.getElementsByClassName("dotMembers");

  if (m > membersSlides.length) {secondSlideIndex = 1}
  if (m < 1) {secondSlideIndex = membersSlides.length}
  
  for (j = 0; j < membersSlides.length; j++) {
      membersSlides[j].style.display = "none";
  }
  for (j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active", "");
  }

  membersSlides[secondSlideIndex-1].style.display = "flex";
  dots[secondSlideIndex-1].className += " active";
}

// Fonction automatique

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

