const teddiesList = document.getElementById('teddies_list');

async function retrieveResult(url) {
    let result = await fetch(url)
    return result.json()
}

retrieveResult('http://localhost:3000/api/teddies').then(teddies => {
    console.log(teddies)
    teddies.forEach(teddy => {
        console.log(teddy)
        teddiesList.innerHTML += `<div class="ensemble__produits">
                                    <article class="bloc__image--nom--prix">
                                        <a href="products.html?id=${teddy._id}"><img id="image_responsive" src="${teddy.imageUrl}" alt="Photo de ${teddy.name} "></a>
                                        <div class="bloc__nom--prix">
                                            <div><strong>Nom :</strong> ${teddy.name}</div> 
                                            <div><strong>Prix :</strong> ${teddy.price}€</div>
                                        </div>
                                    </article>
                                </div>`
    });
});