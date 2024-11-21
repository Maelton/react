# Funções como Valores

Em JavaScript conseguimos atribuir uma função como valor para outra função, observe:

```
function multiplicacao(n1, n2) {
    return n1 * n2;
}

const multiplicacao2 = multiplicacao

console.log(multiplicacao2(2, 2)); //Saída: 4
```

# Função Anônima

Funções anônimas são funcões que não possuem nome em sua assinatura.

## Funções Anônimas Tradicionais (Function Expression)

É possível criar uma função anônima usando a sintaxe tradicional com a palavra-chave function. Ela não tem nome, mas pode ser atribuída a uma variável ou passada como argumento.

```
const funcaoAnonimaTradicioanal = function() {
    console.log("Sou uma funcao anonima");
};

funcaoAnonimaTradicioanal(); //Saída: Sou uma funcao anonima
```

## Funções Anônimas em Arrow Functions

Introduzidas no ES6, as arrow functions são uma forma concisa de criar funções anônimas. Elas não têm this próprio, o que as torna diferentes das funções tradicionais em alguns contextos.

```
() => {
    console.log("Sou uma arrow function!");
}

(n1, n2) => n1 + n2;

//Arrow function autoexecutável

(() => {
    console.log("Sou uma arrow function autoexecutavel")
})(); //Saída: Sou uma arrow function autoexecutavel
```

Arquivo de scripts: [01-funcao-anonima.js](../01-funcao-anonima.js)