const storageCart = localStorage.getItem('cart');
const productsLists = JSON.parse(storageCart);
const deleteProduct = ('<button><i class="fas fa-times"></i></button>');

async function retrieveResult(url) {
    let result = await fetch(url)
    return result.json()
}

retrieveResult('http://localhost:3000/api/teddies').then(teddies => {
    console.log(teddies)

    for (let i = 0; i < productsLists.length; i++) {

        const price = productsLists[i].productPrice;
        const quantity = productsLists[i].productQuantity;
        const resultPrice = price * quantity;

        let panierTableau = document.getElementById('panier');
        let ligneTableau = panierTableau.insertRow(-1);

        let colonneTableau1 = ligneTableau.insertCell(0);
        colonneTableau1.innerHTML += (productsLists[i].productName);

        let colonneTableau2 = ligneTableau.insertCell(1);
        colonneTableau2.innerHTML += (price + ' ' + '€');

        let colonneTableau3 = ligneTableau.insertCell(2);
        colonneTableau3.innerHTML += (productsLists[i].productColor);

        let colonneTableau4 = ligneTableau.insertCell(3);
        colonneTableau4.innerHTML += quantity;

        let colonneTableau5 = ligneTableau.insertCell(4);
        colonneTableau5.innerHTML = (resultPrice + ' ' + '€');

        let colonneTableau6 = ligneTableau.insertCell(5);
        colonneTableau6.innerHTML += deleteProduct;

    }

});