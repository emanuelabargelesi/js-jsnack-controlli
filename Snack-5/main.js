//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
//un numero, se è dispari inseriscilo nell’array

//dichiaro le variabili
var listanumeri, domanda

listanumeri = [];

//creo un ciclo per fare sei domande
for (var i = 0; i < 6; i++) {
domanda = prompt('inserisci un numero');

if (domanda % 2 != 0) {
listanumeri.push(domanda);
}
else {
}


document.getElementById("stampa").innerHTML =  listanumeri;
