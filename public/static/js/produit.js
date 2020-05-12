const ajoutPanier = document.getElementById('addPanier');

const parametre = {
    nom: 'Lenny and Carl',
    price: '5900€',
    id: '5beaaa8f1c9d440000a57d95'
};
const titre = document.querySelector('h2');
const ligne = document.querySelector('p.ligne');


ajoutPanier.addEventListener("click", myFunction);

function myFunction() {
    ligne.innerHTML += "Hello World";
}