// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//dichiaro le variabili
var nomi, domanda, messaggio;

//array con i nomi
nomi = [
  'Jay',
  'Daisy',
  'Nick',
  'Myrtle',
  'Tom'
];

//domando nome utente e setto su oppercase per evitare "case-sensitive"
domanda = prompt("Ciao, qual è il tuo nome?").toUpperCase();

//setto inizialmente la risposta su false
messaggio = false;

//setto i cognomi to uppercase per evitare il "case-sensitive"
for (var i = 0; i < nomi.length; i++) {
  nomi[i] = nomi[i].toUpperCase();
}

//se il nome è nella lista il messaggio sarà vero
for (var i = 0; i < nomi.length; i++) {
  if (domanda === nomi[i]) {
    messaggio = true;
  }
}

//stampo messaggio vero e falso
if (messaggio) {
  document.getElementById("stampa").innerHTML = "Benvenuto, prego si accomodi";
} else {
  document.getElementById("stampa").innerHTML = "Ad Majora!";
}
