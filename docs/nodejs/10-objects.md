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

### Em vez de fazer isso:

```
const person = {
  name: "Felpa",
  age: 22,
  isMarried: false
}

const name = person.name;
const age = person.age;
const isMarried = person.isMarried;
```

### Faça isso:

```
const person = {
  name: "Felpa",
  age: 22,
  isMarried: false
}

const {name, age, isMarried} = person;
```

##

### Em vez de fazer isso:

const name = "Felpa";

```
const person = {
  name: name,
  idade: 20
}
```

### Faça isso:

const name = "Felpa";

```
const person = {
  name,
  idade: 20
}
```

## Operador de espalhamento (spread operator)

```
const person = {
  name: "Person I",
  age: 22,
  isMarried: false
}

const person2 = {...person, name: "Person II"}
```

# Referências

- [All The JavaScript You Need To Know For React](https://youtu.be/m55PTVUrlnA?si=Y27K55E3uEyTh1OF)