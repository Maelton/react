//Funções como valores

function multiplicacao(n1, n2) {
    return n1 * n2;
}

const multiplicacao2 = multiplicacao

console.log(multiplicacao2(2, 2)); //4

//Funções anônimas tradicionais (function expression)

const funcaoAnonimaTradicioanal = function() {
    console.log("Sou uma funcao anonima");
};

funcaoAnonimaTradicioanal(); //Saída: Sou uma funcao anonima

//Funções Anônimas em Arrow Functions

() => {
    console.log("Sou uma arrow function!");
}

(n1, n2) => n1 + n2;

//Arrow function autoexecutável

(() => {
    console.log("Sou uma arrow function autoexecutavel")
})(); //Saída: Sou uma arrow function autoexecutavel