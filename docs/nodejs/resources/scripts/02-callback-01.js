//Callback simples

function soma(n1, n2) {
    return n1 + n2;
}

function multiplicacao(n1, n2) {
    return n1 * n2;
}

function showCalculationResult(value1, value2, calculationCallback) {
    console.log(calculationCallback(value1, value2));
}

showCalculationResult(0, 1, soma);
showCalculationResult(1, 2, multiplicacao);

//Callback com arrow function

showCalculationResult(1, 2, (n1,n2) => {return n1 + n2}); //passando arrow function como argumento
showCalculationResult(2, 2, (n1, n2) => n1 * n2); //passando arrow function em linha como argumento

//fs.readdir( path, options, callback )

const fs = require("fs");
fs.readdir( '.', (err, files) => console.log(files) );