const orderCart = localStorage.getItem('commande');
const numCommandes = JSON.parse(orderCart);


let numeroCommande = document.getElementById('numCommande');
numeroCommande.innerHTML = `"<strong>${numCommandes.orderId}</strong>"`;
let nameCommande = document.getElementById('denomination');
nameCommande.innerHTML = `$`;
let adresseCommande = document.getElementById('adresse');
adresseCommande.innerHTML = `$`;
let mailCommande = document.getElementById('mail');
mailCommande.innerHTML = `$`;