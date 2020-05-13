import { response } from "express";

const teddiesList = document.getElementById('teddies_list');
const url = [
    'http://localhost:3000/api/teddies'
];

let request = new XMLHttpRequest();
request.onreadystatechange = function(teddies_list) {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);
        console.log(response);
    }
};

request.open("GET", "http://localhost:3000/api/teddies");
request.send();