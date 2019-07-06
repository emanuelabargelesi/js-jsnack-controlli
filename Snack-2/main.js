//JSnack #2:
//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta,
//poi la parola più lunga.

//dichiaro le variabili
var parola1, parola2;

//chiedo all'utente di scegliere due parole
 parola1 = prompt('Inserisci una parola');
 parola2 = prompt('Inserisci una seconda parola');


//verifico e stampo la condizione in base alla parola più lunga (o uguali, in caso)
if (parola1.length > parola2.length) {
document.getElementById("parola").innerHTML = parola1 + parola2;
} else if (parola1.length < parola2.length) {
  document.getElementById("parola").innerHTML = parola2 + parola1;
} else {
  document.getElementById("parola").innerHTML = 'le parole sono egualmente lunghe';
}
