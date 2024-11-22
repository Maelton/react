//Async e Await
async function exemploAwait() {
    const promise = new Promise(resolve => setTimeout(() => resolve("Valor após 2 segundos"), 2000));
    
    const resultado = await promise; // A execução vai esperar até que a Promise seja resolvida.
    console.log(resultado); // "Valor após 2 segundos"
}
  
exemploAwait();
console.log("3");

//Realizando Testes

const promise = new Promise(resolve => setTimeout(() => resolve("Valor após 2 segundos"), 2000));
    
const resultado = await promise; // A execução vai esperar até que a Promise seja resolvida.
console.log(resultado); // "Valor após 2 segundos"
console.log("4");

//Async e Await
async function test() {
    console.log("inside test()");
    console.log("inside test()");
}

test()
console.log("Outside test()");

//Testes
async function buscarPosts() {
    for (let x=0; x<5; x++)
        console.log("Dentro da função e antes do await");

    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }

        const dados = await resposta.json();
        console.log("Posts obtidos:", dados);
    } catch (erro) {
        console.error("Ocorreu um erro:", erro);
    }

    for (let x=0; x<5; x++)
        console.log("Dentro da função e depois do await");
}
  
buscarPosts();

for (let x=0; x<5; x++)
    console.log("Fora e depois da função com await e antes da resposta");