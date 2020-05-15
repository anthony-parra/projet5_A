const teddiesModif = document.getElementById('teddies__modification');
const addPanier = document.getElementById('addpanier');
const urls = new URL(window.location.href);
const searchParams = new URLSearchParams(urls.search);
const teddyId = searchParams.get('id');

/* ------VARIABLES------ HTML-------- */

const image = document.getElementById('image__bloc');
const titre = document.getElementById('titre__bloc');
const select_colors = document.getElementById('color__bloc--option');
const description = document.getElementById('description__bloc');
const prix = document.getElementById('prix__bloc');


async function result(url) {
    let result = await fetch(url)
    return result.json()
}

result('http://localhost:3000/api/teddies' + '/' + teddyId).then(teddy => {
    console.log(teddy.colors)
    colors = teddy.colors

    titre.innerHTML = `Amusez-vous et personnalisez ${teddy.name} !`;
    image.innerHTML = `<img src="${teddy.imageUrl}" alt="Photo de ${teddy.name} ">`;

    colorInside = '<option>Choisissez votre couleur !</option>'
    for (i = 0; i < colors.length; i++) {
        colorInside += '<option> ' + colors[i] + ' </option>';
    }
    select_colors.innerHTML += colorInside

    description.innerHTML = `${teddy.description}`

    prix.innerHTML = `<strong>Prix : </strong>${teddy.price}€`
});

addPanier.onclick = function() {
    alert("Votre produit vient dêtre ajouté au panier");
}