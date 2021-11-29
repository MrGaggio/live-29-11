// crea un array vuoto
/* const numbers = [] */



// se è dispari inseriscilo nell'array

/* for (let i = 0; i < 7; i++) {
    const number = prompt( "inserisci 6 volte un numero")
    if (number % 2 != 0) {
        numbers.push(number)
    }
    
}
console.log(numbers); */


//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.



// chiedere numero all'utente che viene usato come cubo
const numeroN = parseInt(prompt('inserisci un numero'))

// genera un numero base da 1 a 10
const numeroBase = Math.floor(Math.random() * 10) +1;

// calcola il cubo del numero base e numero inserito dall'utente
const cubo = Math.pow(numeroBase, numeroN)

console.log(cubo);