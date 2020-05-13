fetch(' http://localhost:3000/api/teddies')
    .then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log(data)
    });

const url = ('http://localhost:3000/api/teddies');
const titre = document.querySelector('h2');



localStorage.setItem("titre", "Pouet");