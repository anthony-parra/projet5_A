const teddiesModif = document.getElementById('teddies__modification');
const addPanier = document.getElementById('addpanier');


async function retrieveResult(url) {
    let result = await fetch(url)
    return result.json()
}

retrieveResult('http://localhost:3000/api/teddies').then(teddies => {
    console.log(teddies)
    teddies.forEach(teddy => {
        console.log(teddy)
        teddiesModif.innerHTML = `<div class="bloc__personnalisation"> 
                                    <article>
                                        <img id="${teddy._id}" src="${teddy.imageUrl}" "${teddy._id}" alt="Photo de ${teddy.name}">
                                    </article>
                                    <article>
                                        <p>Personnalisez votre Ours !</p>
                                        <form>
                                            <select id="largeur__color" name="couleur" size="1">
                                                <option>Choisissez votre couleur
                                                <option id="color">${teddy.colors[0]}
                                                <option id="color">${teddy.colors[1]}
                                                <option id="color">${teddy.colors[2]}
                                            </select>
                                        </form>
                                        <p>Description : </p>
                                        <p>${teddy.description}</p>
                                        <p>Prix : ${teddy.price}€</p>
                                        <button id="addpanier">Ajouter au panier !</button>
                                    </article>
                                </div>`
    });
});