async function retrieveResult(url) {
    let result = await fetch(url)
    return result.json()
}

retrieveResult('http://localhost:3000/api/teddies').then(teddies => {
    console.log(teddies)


});