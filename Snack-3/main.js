// JSnack #3:
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma
// stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni,
// con il for e con il while

//dichiaro variabili
var num, totale, totale;

totale = 0;
totale2 = 0;

//ciclo for
for (var i = 0; i < 5; i++) {
  num = parseInt(prompt('inserisci un numero'));
  totale = totale + num;
}

document.getElementById('stampafor').innerHTML = 'La somma totale dei tuoi numeri è: ' + totale;


//ciclo while
var j = 0;
while (j < 5) {
  num = parseInt(prompt('inserisci un numero'));
  //totale2 = totale2 + num;
  //questa è la forma compatta
  totale2 += num;
j++;
}

document.getElementById('stampawhile').innerHTML = 'La somma totale dei tuoi numeri è: ' + totale2;
