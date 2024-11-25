# Callback

Função ou URL que será executada quando algum evento acontecer ou quando algum código chegar a um estado desejado.

Normalmente essa função é assíncrona, ou seja, ela não será executada imediatamente.

Na maioria das vezes as funções callback são passadas como argumentos de outras funções.

## Exemplo 1: Callback simples

```
function soma(n1, n2) {
    return n1 + n2;
}

function multiplicacao(n1, n2) {
    return n1 * n2;
}

function showCalculationResult(value1, value2, calculationCallback) {
    console.log(calculationCallback(value1, value2));
}

showCalculationResult(1, 2, soma); //passando `soma` como argumento
showCalculationResult(1, 2, multiplicacao); //passando `multiplicacao` como argumento
```

## Exemplo 2: Callback com arrow function

```
function showCalculationResult(value1, value2, calculationCallback) {
    console.log(calculationCallback(value1, value2));
}

showCalculationResult(1, 2, (n1,n2) => {return n1 + n2}); //passando arrow function como argumento
showCalculationResult(2, 2, (n1, n2) => n1 * n2); //passando arrow function em linha como argumento
```

## Exemplo 3: fs.readdir

O método fs.readdir() é usado para ler de forma assíncrona o conteúdo de um diretório fornecido.

A assinatura desse método é `fs.readdir( path, options, callback )` e a implementação do callback passado pelo usuário precisa conter os argumentos `err` e `files`:

- err: Erro gerado se a operação falhar.

- files: Array de objetos String, Buffer ou fs.Dirent que contêm os arquivos no diretório se a operação for bem sucessida.

Esse método nativo do módulo FS (File System) do Node.js nos permite refletir sobre a natureza e utilidade das callbacks, a implementação interna dessa função irá chamar a assinatura `callback` e passará como parametros os valores relativos aos possíveis erros ou arquivos lidos resultantes da interação com o sistema operacional.

A forma com que os possíveis erros ou arquivos serão tratados será escolhido pelo usuário, e ele poderá tratar de formas diferentes toda vez que chamar a função, informando a implementação para a função callback assinada no método `readdir()`.

Observe a ilustração imaginária da implementação do método `fs.readdir()`:

```
fs.readdir( path, options, callback ) {
    //A função interage com o sistema operacional
    //A implementação cria uma variavei `errosDaInteracao`
    //E outra variavel `arquivosResultadoDaInteracao`
    //...

    //Depois da interação com o SO a implementação retorna o resultado para o usuario
    //Assim o usuario ira tratar o resultado implementando `callback` como ele desejar
    callback(errosDaInteracao, arquivosResultadoDaInteracao);
}

//O usuário então implementa callback como quiser
fs.readdir( '.', (err, files) => console.log(files) );
```

Arquivo de scripts: [02-callback-01.js](../02-callback-01.js)

# Referências

- [Callback // Dicionário do Programador](https://youtu.be/zUtqTM6_-PM?si=BnFtx_kPqBJ9QHvV)

- [Curso JavaScript #45 - Callback functions](https://youtu.be/jFfg_IdZAc8?si=pJ30XjG2D3vkkRe-)

- [ENTENDENDO funções CALLBACK no JAVASCRIPT](https://youtu.be/vWJu3RX3b_o?si=cY3aADJIkavtnyeK)

- [Método Node.js fs.readdir()](https://www.geeksforgeeks.org/node-js-fs-readdir-method/)