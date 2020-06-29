const orderCart = localStorage.getItem('commande');
const numCommandes = JSON.parse(orderCart);
const commandeCart = localStorage.getItem('cart');
const totalPrice = JSON.parse(commandeCart);
const sommePriceTotal = document.getElementById('sommePriceTotal');


let numeroCommande = document.getElementById('numCommande');
numeroCommande.innerHTML = `"<strong>${numCommandes.orderId}</strong>"`;
let nameCommande = document.getElementById('denomination');
nameCommande.innerHTML = `"<strong>${numCommandes.contact.lastName}</strong>"`;
let adresseCommande = document.getElementById('adresse');
adresseCommande.innerHTML = `"<strong>${numCommandes.contact.address}, ${numCommandes.contact.city}</strong>"`;
let mailCommande = document.getElementById('mail');
mailCommande.innerHTML = `"<strong>${numCommandes.contact.email}</strong>"`;


let somme = 0;

for (let i = 0; i < totalPrice.length; i++) {
    let allPrices = totalPrice[i].productPrice;
    //console.log(allPrices);
    let allQty = totalPrice[i].productQuantity;
    //console.log(allQty);
    let resultPrice = allPrices * allQty;
    //console.log(resultPrice);
    somme += resultPrice;
    console.log(somme);

    sommePriceTotal.innerHTML = ` "<strong>${somme}€</strong>".`
}