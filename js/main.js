// VARIABILI GLOBALI

let start = document.querySelector(".start");
const lista = document.querySelector(".lista");
let numLista;


// EVENTO AL CLICK DEL BOTTONE
start.addEventListener("click", function () {
    let numeri = [];
    let listaUser = [];

    genNumeri(numeri);

    let clearNum = setTimeout(function () {
        lista.innerHTML = "";

        setTimeout(function() {
            while (listaUser.length < 5) {
                let numUser = prompt("Scrivi in ordine i numeri che hai visto");
                listaUser.push(numUser);
            }
            console.log(listaUser)
        }, 10)
        

    }, 3000);

    clearNum;

})






// FUNZIONE PER CREARE 5 NUMERI CASUALI E STAMPARLI IN PAGINA
function genNumeri(array) {
    lista.innerHTML = "";

    // CICLO PER CREARE I NUMERI CASUALI
    while (array.length < 5) {
        numRandom = Math.floor(Math.random() * 100 + 1);
        if (array.includes(numRandom)) {
        }
        else {
            array.push(numRandom);
        }
    }

    // CICLO PER STAMPARE I NUMERI IN PAGINA
    for (let i = 0; i < array.length; i++) {
        let nRandom = array[i];

        numLista = document.createElement("li");
        numLista.classList.add("n-random");
        lista.append(numLista);
        numLista.append(nRandom);

    }

}