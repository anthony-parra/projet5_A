const storageCart = localStorage.getItem('cart');
const productsLists = JSON.parse(storageCart);
const panierTableau = document.getElementById('panier__body');



if (storageCart != null) {

    for (let i = 0; i < productsLists.length; i++) {

        const price = productsLists[i].productPrice;
        const quantityList = productsLists[i].productQuantity;
        const resultPrice = price * quantityList;

        let ligneTableau = panierTableau.insertRow(-1);

        let colonneTableau1 = ligneTableau.insertCell(0);
        colonneTableau1.innerHTML += (productsLists[i].productName);

        let colonneTableau2 = ligneTableau.insertCell(1);
        colonneTableau2.innerHTML += (`${price} €`);

        let colonneTableau3 = ligneTableau.insertCell(2);
        colonneTableau3.innerHTML += (productsLists[i].productColor);

        let colonneTableau4 = ligneTableau.insertCell(3);

        let buttonMinus = document.createElement('button');
        buttonMinus.innerHTML = `<i id="minus" class="fas fa-minus"></i>`;

        buttonMinus.onclick = () => {
            productsLists[i].productQuantity -= 1;
            console.log(productsLists[i].productQuantity);
        }

        colonneTableau4.appendChild(buttonMinus);

        colonneTableau4.innerHTML += quantityList;

        let buttonPlus = document.createElement('button');
        buttonPlus.innerHTML = `<i id="plus" class="fas fa-plus"></i>`;

        buttonPlus.onclick = () => {
            productsLists[i].productQuantity += 1;

            console.log(productsLists[i].productQuantity);
        }

        colonneTableau4.appendChild(buttonPlus);

        let colonneTableau5 = ligneTableau.insertCell(4);
        colonneTableau5.innerHTML += (resultPrice + ' ' + '€');

        let colonneTableau6 = ligneTableau.insertCell(5);

        let button = document.createElement('button');
        button.innerHTML = `<i class="fas fa-times"></i>`;

        colonneTableau6.appendChild(button);

        button.addEventListener('click', function() {
            panierTableau.deleteRow(i)
            productsLists.splice(i, 1);
            localStorage.setItem('cart', JSON.stringify(productsLists));
            document.location.reload()
        });


    }


}