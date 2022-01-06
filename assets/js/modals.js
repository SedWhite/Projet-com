// MODALS POUR LA GALLERIE
function getImg(modal){ //modal sert à lier avec les onclick sur les img
    let goodModal = document.getElementById(modal);
    let getModals = document.querySelectorAll(".boxSizing"); 
    /*^^^^^^^ Cela crée un tableau des .modal*/
    let modalsLength = getModals.length;
  
    // Boucle sur chaque élément pour y ajouter un display = none tour à tour
    for (let i = 0; i < modalsLength; i++){
        getModals[i].style.display = "none";
    }
    // Ouvrir la bonne modal et paramètrer le button 'close'
    if(modal != 'close'){
        goodModal.style.display = "block";
    } else if (window.addEventListener("click", function(){
      goodModal.style.display = "none";
    }));
  };