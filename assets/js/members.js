let imgAlois = document.createElement("memberPic");
imgAlois.src = "../img/alois.jpg";

let imgAlexis = document.createElement("memberPic");
imgAlexis.src = "../img/alexis.jpg";

let imgLucas = document.createElement("memberPic");
imgLucas.src = "../img/lucas.jpg"

let image = document.getElementById("memberPic");
// ALOIS MAQUETTISTE
const firstMember = [
    { name : "Aloïs Patoor"}, 
    { img : imgAlois}, 
    { text1 : "Maquettiste de l'équipe, il conçoit les maquettes de vos sites internet tout en intégrant l'expériences utilisateur (UX design) au coeur de son travail."}, 
    { text2 : "L'UX Design, qu'est-ce que c'est ? L’UX Design vise à améliorer, simplifier, optimiser l’expérience d’un service ou d’un produit et résoudre les éventuels problèmes rencontrés dans son utilisation. On entend souvent, dans le langage courant, que l’expérience utilisateur doit être “plus ergonomique”, “plus intuitive”. Il s’agit d’une formulation qui vise à qualifier la nature de l’expérience souhaitée. On recherche une meilleure utilisabilité de l’interface, sans oublier l’attractivité qu’elle doit susciter. L’UX Design ne se limite pas à rendre l’interface “fonctionnelle”. Cette méthode de conception va bien au-delà en accompagnant l’expérience dans sa dimension émotionnelle (design émotionnel)."}, 
    { text3 : "" }];
// ALEXIS REFERENCEMENT SEO
const secondMember = [
    { name : "Alexis Doyen"}, 
    { img : imgAlexis},
    { text1 : ""}, 
    { text2 : ""}, 
    { text3 :""}];
// LUCAS OPTIMISATION SECURITÉ
const thirdMember = [
    { name : "Lucas Edwige"}, 
    { img : imgLucas}, 
    { text1 : ""}, 
    { text2 : ""}, 
    { text3 : ""}];

const Members =[
    firstMember,
    secondMember,
    thirdMember
];

function getMembersInfo(){
    let k;
    for(k = 0; k < Members.length; k++){
        console.log(Members[k]);
        document.getElementById("memberName").innerHTML = Members[k[0]];
        document.getElementById("memberPic").innerHTML = Members[k[1]];
        document.getElementById("memberText1").innerHTML = Members[k][2];
        document.getElementById("memberText2").innerHTML = Members[k[3]];
        document.getElementById("memberText3").innerHTML = Members[k[4]];
    }
}
