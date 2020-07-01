/* ------VARIABLES------ HTML-------- */

const teddiesModif = document.getElementById('teddies__modification');
const addCart = document.getElementById('addpanier');
const urls = new URL(window.location.href);
const searchParams = new URLSearchParams(urls.search);
const teddyId = searchParams.get('id');
const image = document.getElementById('image__bloc');
const titre = document.getElementById('titre__bloc');
const select_colors = document.getElementById('color__bloc--option');
const description = document.getElementById('description__bloc');
const prix = document.getElementById('prix__bloc');



/* --------------FETCH-------------- */

async function result(url) {
    let result = await fetch(url)
    return result.json()
}

result('http://localhost:3000/api/teddies' + '/' + teddyId).then(teddy => {
    console.log(teddy)


    titre.innerHTML = `Amusez-vous et personnalisez ${teddy.name} !`;
    image.innerHTML = `<img id="image_products" src="${teddy.imageUrl}" alt="Photo de ${teddy.name} ">`;

    colors = teddy.colors
    colorInside = document.getElementById('colorInside')
    for (i = 0; i < colors.length; i++) {
        colorInside += '<option id="colorInside"> ' + colors[i] + ' </option>';
    }
    select_colors.innerHTML += colorInside

    description.innerHTML = `${teddy.description}`

    prix.innerHTML = `<strong>Prix : </strong>${teddy.price}€`


    /* --------------BOUTON AJOUT PANIER-------------- */

    addCart.onclick = function() {
        alert("Votre produit vient d'être ajouté au panier !")
    };

    addCart.addEventListener('click', addProducts);

    let newCart = null;

    function createNewCart() {
        let storageCart = localStorage.getItem('cart');
        if (storageCart == null) {
            newCart = []
            console.log('Initialisation')
            console.log('Création du panier !');
        } else {
            newCart = JSON.parse(storageCart)
            console.log('Récupération')
        }

        localStorage.setItem('cart', JSON.stringify(newCart));

    }

    function products() {

        let productColor = select_colors.options[select_colors.selectedIndex].value;
        let productId = teddyId;
        let productFound = newCart.find(element => element.productId == productId && element.productColor == productColor);
        if (productFound == undefined) {
            let productQuantity = 1;
            let productPrice = teddy.price;
            let productName = teddy.name;
            newCart.push({ productId, productColor, productName, productPrice, productQuantity });
        } else {
            productFound.productQuantity++;
        }

        localStorage.setItem('cart', JSON.stringify(newCart));

        console.log('Ajout du produit dans le panier !');
        console.log(newCart)
    }


    function addProducts() {
        if (newCart == null) {
            createNewCart()
        }
        products()
    }

});