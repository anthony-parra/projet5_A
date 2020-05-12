fetch(' http://localhost:3000/api/teddies')
    .then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log(data)
    });

const url = ('http://localhost:3000/api/teddies');
const lignePanier = document.querySelector('p#ligne');
const declencheur = document.querySelector('button#bouton');

declencheur.onclick = function() {
    lignePanier = ('')
};