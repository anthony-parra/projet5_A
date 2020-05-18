lignePanier = localStorage.setItem('lignePanier', 'cellule', document.getElementById('panier__commande--elements'));
const lignePanier = document.getElementById('panier__commande--elements');
const bouton = document.getElementById('bouton');

async function retrieveResult(url) {
    let result = await fetch(url)
    return result.json()
}

retrieveResult('http://localhost:3000/api/teddies').then(teddies => {
    console.log(teddies)


});
bouton.addEventListener('click', add);

function add() {
    lignePanier.innerHTML = '<td> Tete de doude </td>'
};