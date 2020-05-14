const teddiesModif = document.getElementById('teddies__modification');
const addPanier = document.getElementById('addpanier');
const colors = document.getElementById('color');
const urls = new URL(window.location.href);
const searchParams = new URLSearchParams(urls.search);
const teddyId = searchParams.get('id');
async function result(url) {
    let result = await fetch(url)
    return result.json()
}


result('http://localhost:3000/api/teddies' + '/' + teddyId).then(teddy => {
    console.log(teddy)
    teddiesModif.innerHTML += `<div class="bloc__personnalisation"> 
                                    <article>
                                        <img src="${teddy.imageUrl}" alt="Photo de ${teddy.name}">
                                    </article>
                                    <article>
                                        <p>Personnalisez votre Ours !</p>
                                        <form>
                                            <select id="largeur__color" name="couleur" size="1">
                                                <option>Choisissez votre couleur 
                                                <option id="color">${teddy.colors}
                                            </select>
                                        </form>
                                        <p>Description : </p>
                                        <p>${teddy.description}</p>
                                        <p>Prix : ${teddy.price}€</p>
                                        <button id="addpanier">Ajouter au panier !</button>
                                    </article>
                                </div>`

});