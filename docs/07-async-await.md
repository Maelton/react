# Async e Await

O async e o await são palavras-chave utilizadas no JavaScript e em algumas outras linguagens, com o objetivo de simplificar o trabalho com operações assíncronas, tornando o código mais legível e fácil de entender.

## Async

Quando você marca uma função com `async` em **JavaScript**, está indicando que essa função é assíncrona. Isso altera o comportamento padrão da função e habilita o uso de `await`- 'await' expressions are only allowed within `async` functions and at the top levels of modules - dentro dela para lidar com operações assíncronas.

Embora a função seja `async`, a execução inicial dela não é atrasada porque o código síncrono ainda é executado normalmente. A diferença ocorre quando você usa `await`, observe:

```
async function exemploAsync() {
  console.log("Dentro da função");
}

console.log("Antes de chamar a função");
exemploAsync();
console.log("Depois de chamar a função");

//Saída:

//Antes de chamar a função
//Dentro da função
//Depois de chamar a função
```

Sobre funções marcardas com `async`:

### 1 Retorna sempre uma Promise

- Uma função marcada com `async` sempre retorna uma **Promise**, independentemente do que você retorne explicitamente no corpo da função.

- Se você retornar um valor direto, ele será automaticamente envolvido em uma **Promise** <u>resolvida</u>.

- Se um erro for lançado dentro da função, a **Promise** será <u>rejeitada</u> com esse erro.

Uma função marcada como `async` sempre retorna uma Promise, mesmo que o corpo da função não tenha um return explícito. Se você não retornar nada na função, a **Promise** retornada será automaticamente resolvida com o valor `undefined`, observe:

```
async function semRetorno() {
  console.log("Apenas um log dentro da função");
}

const resultado = semRetorno();
console.log(resultado); 

// Saída:

//Apenas um log dentro da função
//Promise { undefined }
```

### 2 Permite o uso de await

- Dentro de uma função `async`, você pode usar a palavra-chave `await` para pausar a execução da função até que uma **Promise** seja resolvida ou rejeitada.

- Isso torna o código assíncrono mais legível, evitando o uso excessivo de callbacks ou encadeamentos com `.then()` e `.catch()`.

Exemplo:

```
async function buscarDados() {
  const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dados = await resposta.json();
  return dados;
}
```

## Await

O await é uma palavra-chave do JavaScript que faz parte da sintaxe para trabalhar com Promises em código assíncrono. Ele só pode ser usado dentro de uma função marcada como async e permite que você pause a execução da função até que uma **Promise** seja resolvida ou rejeitada. Isso ajuda a escrever código assíncrono de maneira mais legível, como se fosse síncrono.

A partir do ECMAScript 2022, o await pode ser usado não apenas dentro de funções assíncronas (async), mas também no nível superior de módulos, o que é conhecido como "top-level await".

Qualquer código dentro da função, após o uso de `await`, será executado como parte de uma **Microtask**, que tem alta prioridade no **Event Loop**, mas que pode ter sua ordem de execução trocada de posição se combinada com outros tipos de tarefas. Observe:

Código:

```
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
```

Saída:

```
Dentro da função e antes do await
Dentro da função e antes do await
Dentro da função e antes do await
Dentro da função e antes do await
Dentro da função e antes do await
Fora e depois da função com await e antes da resposta
Fora e depois da função com await e antes da resposta
Fora e depois da função com await e antes da resposta
Fora e depois da função com await e antes da resposta
Fora e depois da função com await e antes da resposta
Posts obtidos: [
  //Dados resposta da requisição...
]
Dentro da função e depois do await
Dentro da função e depois do await
Dentro da função e depois do await
Dentro da função e depois do await
Dentro da função e depois do await
```

Observe que o fluxo síncrono dentro da função executou normalmente até o `await`.

Após o `await` toda a função tornou-se uma **microtask** e o fluxo do script teve continuidade com à execução do `for` loop definido após o escopo da função.

Uma vez que todos os `console.log()` foram executados e a **memória Stack** ficou livre, a **microtask** (resto da função após o `await`) foi executada.

Arquivo de scripts: [04-async-await.js](../04-async-await.js)