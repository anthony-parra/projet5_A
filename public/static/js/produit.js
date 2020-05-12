fetch(' http://localhost:3000/api/teddies')
    .then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log(data)
    });

const clickAdd = document.querySelector('button#addPanier');

clickAdd.onclick = function() {
    alert('Votre produit à bien été ajouté au panier !')
};