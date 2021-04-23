

/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:*/


var kmUtente = parseInt(prompt('quanto è la lunghezza della tratta che vuoi percorrere?(espressa in numero)'));
console.log(kmUtente);
if (isNaN(kmUtente)) {
    alert('Devi scrivere il numero in cifre');
}
var anniUtente = parseInt(prompt('quanti anni hai? sempre espresso in cifre'));
console.log(anniUtente);

if (isNaN(anniUtente)) {
    alert('Devi scrivere l\'età in cifre');
}


//il prezzo del biglietto è definito in base ai km (0.21 € al km)

var prezzoChilometrico = kmUtente * 0.21;
console.log(prezzoChilometrico);

var prezzoScontato;

if (anniUtente < 18) {
    //va applicato uno sconto del 20% per i minorenn
    prezzoScontato=prezzoChilometrico*0.8;
    console.log(prezzoScontato);

} else if (anniUtente > 65) {
    //va applicato uno sconto del 40% per gli over 65.
    prezzoScontato = prezzoChilometrico * 0.6;
    console.log(prezzoScontato);

    } else {
        prezzoScontato=prezzoChilometrico;
        console.log(prezzoScontato);

}

/* L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.  */


    /* troncamento cifre decimali in eccesso: arrotondo il numero moltiplicato per  10^n dove n sono il numero di cifre decimali che voglio ottenere.
     */
    var prezzoTroncato = Math.round(prezzoScontato*100);

    console.log(prezzoTroncato);

    /* per poi dividerlo di nuovo per 10^n e riottenere le cifre decimali che voglio    mantenere */

    var prezzoReale = prezzoTroncato/100;
    console.log(prezzoReale);

    // restituisco a video il risultato

    var messaggio = document.getElementById("msg");

    if (isNaN(kmUtente)|| isNaN(anniUtente) ) {
   messaggio.innerHTML = 'I valori digitati sono errati, ricarica la pagina per favore';

} else {
    document.getElementById("msg").innerHTML= 'Il prezzo del tuo biglietto finale è di ' + prezzoReale + '€';
    document.getElementById("km").innerHTML= kmUtente + 'km';
    document.getElementById("anni").innerHTML= anniUtente + ' anni';
}