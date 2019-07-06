//JSnack #1:
//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

//dichiaro le variabili
var numero1, numero2;

//chiedo all'utente di scegliere due numeri
 numero1 = parseInt(prompt('Inserisci un numero'));
 numero2 = parseInt(prompt('Inserisci un secondo numero'));


//verifico e stampo la condizione in base al risultato maggiore (o pareggio, in caso)
if (numero1 > numero2) {
document.getElementById("risultato").innerHTML = numero1;
} else if (numero1 < numero2) {
  document.getElementById("risultato").innerHTML = numero2;
} else {
  document.getElementById("risultato").innerHTML = 'pareggio';
}
