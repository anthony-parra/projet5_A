const storageCart = localStorage.getItem('cart');
const productsLists = JSON.parse(storageCart);
const panierTableau = document.getElementById('panier__body');
let somme = 0;


if (storageCart != null) {

    for (let i = 0; i < productsLists.length; i++) {

        const price = productsLists[i].productPrice;
        const quantityList = productsLists[i].productQuantity;
        const resultPrice = price * quantityList;

        somme += resultPrice;

        let ligneTableau = panierTableau.insertRow(-1);
        ligneTableau.id = "ligne-" + i;
        let colonneTableau1 = ligneTableau.insertCell(0);
        colonneTableau1.innerHTML += (productsLists[i].productName);

        let colonneTableau2 = ligneTableau.insertCell(1);
        colonneTableau2.innerHTML += `${price}€`;

        let colonneTableau3 = ligneTableau.insertCell(2);
        colonneTableau3.innerHTML += (productsLists[i].productColor);

        let colonneTableau4 = ligneTableau.insertCell(3);



        let buttonMinus = document.createElement('button');
        buttonMinus.innerHTML = `<i class = "fas fa-minus"></i>`;
        buttonMinus.id = `minus-${i}`;
        buttonMinus.onclick = (e) => {
            updateQte(e.currentTarget.id.split('-')[1], 'moins')
        }

        colonneTableau4.appendChild(buttonMinus);

        let spanQty = document.createElement("span");
        spanQty.id = `qte-${i}`;
        spanQty.textContent = quantityList;
        colonneTableau4.appendChild(spanQty);

        let buttonPlus = document.createElement('button');
        buttonPlus.innerHTML = `<i class = "fas fa-plus"></i>`;
        buttonPlus.id = `plus-${i}`;
        buttonPlus.onclick = (e) => {
            updateQte(e.currentTarget.id.split('-')[1], 'plus')

        }

        colonneTableau4.appendChild(buttonPlus);

        let colonneTableau5 = ligneTableau.insertCell(4);
        colonneTableau5.id = 'prixTotal-' + i;
        colonneTableau5.innerHTML += (resultPrice + ' €');

        let colonneTableau6 = ligneTableau.insertCell(5);

        let button = document.createElement('button');
        button.innerHTML = `<i class = "fas fa-times"></i>`;

        colonneTableau6.appendChild(button);

        button.addEventListener('click', function() {
            panierTableau.deleteRow(i)
            productsLists.splice(i, 1);
            localStorage.setItem('cart', JSON.stringify(productsLists));
            document.location.reload()
        });

        const totalPrice = document.getElementById('prix__total');
        totalPrice.innerHTML = `<div id="blocPrixTotal"><p id="titrePrixTotal">Prix Total de votre panier<p><p id='totalPanier'>${somme} €</p></div>`;


    }
}


document.getElementById('formulaire').addEventListener('submit', (event) => {
    event.preventDefault();
    let products = [];
    for (let i = 0; i < productsLists.length; i++) {
        let productId = productsLists[i].productId;
        products.push(productId);
    }
    let maCommandeForm = new FormData(document.getElementById('formulaire'));
    let contact = {
        firstName: maCommandeForm.get("firstName"),
        lastName: maCommandeForm.get("lastName"),
        city: maCommandeForm.get("city"),
        address: maCommandeForm.get("address"),
        email: maCommandeForm.get("email"),
    }
    const myCart = { contact, products };
    console.log("myCart", myCart);
    envoieDonnee("http://localhost:3000/api/teddies/order", myCart)

});

async function envoieDonnee(url, order) {

    fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(order)

        }).then(function(response) {
            return response.json();
        })
        .then(function(myJsonObj) {
            localStorage.setItem('commande', JSON.stringify(myJsonObj));
            window.location.replace('./commande.html');
            alert('Votre commande a bien été enregistré par nos services !')
        })
        .catch(function(error) {
            console.error("Erreur au niveau des données dans la requête order", error);
        });
}



function updateQte(eltId, action) {
    let qteElt = document.getElementById(`qte-${eltId}`);
    let totalElt = document.getElementById(`prixTotal-${eltId}`)
    let totalPanier = document.getElementById('totalPanier');
    console.log(qteElt)
    let qte = parseInt(qteElt.textContent);
    let nvelleQte = 0;
    let price = productsLists[eltId].productPrice;
    let newTotal = totalPanier.textContent;
    if (action === "plus") {
        nvelleQte = qte + 1;
        newTotal = parseInt(totalPanier.textContent) + price;
    } else {
        if (qte - 1 >= 0) {
            nvelleQte = qte - 1;
            newTotal = parseInt(totalPanier.textContent) - price;
        }
    }

    let resultPrice = nvelleQte * price;

    productsLists[eltId].productQuantity = nvelleQte;
    qteElt.textContent = nvelleQte;
    totalElt.textContent = `${resultPrice} €`;
    totalPanier.textContent = newTotal;
    localStorage.setItem('cart', JSON.stringify(productsLists));
    console.log(productsLists[eltId].productQuantity);
}