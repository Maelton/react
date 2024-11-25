# Objetos em JavaScript

Em JavaScript, os objetos são muito mais flexíveis do que as instâncias de classes em linguagens como Java ou Python. Eles são estruturas de dados semelhantes a dicionários, mas com recursos adicionais.

## 1 Objetos como coleções de pares chave-valor

Em JavaScript, um objeto é basicamente uma coleção de pares chave-valor. Por exemplo:

```
const objeto = {
  nome: "João",
  idade: 30
};
```

Você pode acessar e manipular essas chaves e valores de forma dinâmica:

```
console.log(objeto.nome); // "João"
objeto.altura = 1.75; // Adiciona uma nova chave
console.log(objeto); // { nome: "João", idade: 30, altura: 1.75 }
```

## 2 Protótipos e herança baseada em protótipos

Ao contrário de linguagens como Java, onde objetos são instâncias de classes, o JavaScript usa um modelo de herança baseada em protótipos.

Todo objeto em JavaScript tem um protótipo, que é outro objeto de onde ele pode "herdar" propriedades e métodos.

O protótipo de um objeto pode ser acessado por meio da propriedade `__proto__` (embora o uso de `Object.getPrototypeOf` seja preferido).

```
const pessoa = {
  falar: function() {
    console.log("Olá!");
  }
};

pessoa.falar(); // "Olá!"

const joao = Object.create(pessoa); // joao herda de pessoa
joao.falar(); // "Olá!"
```

Aqui, `joao` não tem o método `falar` diretamente, mas o encontra no protótipo `pessoa`.

## Desconstruindo objetos

## Operador de espalhamento (spread operator)