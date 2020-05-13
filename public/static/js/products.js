const getUsers = async function() {
    let response = await fetch('http://localhost:3000/api/teddies')
    let data = await response.json()
    console.log(data)
};


const clickAdd = document.querySelector('button#addPanier');


clickAdd.onclick = function() {
    alert('Votre produit à bien été ajouté au panier !')
    titres.innerHTML('localeStorage.titre')
};