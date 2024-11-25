# O que são componentes?

Aplicações React são compostas de componentes. Um componente é um pedaço da UI (User Interface) que possui sua própria lógica e aparência. Um componente pode ser pequeno como um simples botão, ou grando como uma página inteira.

A tag de um componente **React** deve sempre ser nomeada com a primeira letra em maiúscula, enquanto as tags **HTML** devem ser minúsculas.

In React, a component is a piece of reusable code that represents a part of a user interface. Components are used to render, manage, and update the UI elements in your application.

React components need to return a single JSX element and not multiple adjacent JSX elements, for exemple returning two buttons in a single function. In order to do so, you'd need to wrap your mutilple JSX elements in a parent element, like a `<div>` for example, or `<> </>` (empty tags).

Componentes são funções JavaScript que recebem props (propriedades, no caso parametros de função) e retornam **HTML**.

# Keywords `export default`

As keywords `export default` especificam o componente principal do arquivo.

A keyword `export` torna a função acessível fora do arquivo.

A keyword `default` informa outros arquivos que estão usando a função que aquela é o método principal do arquivo.

# JSX element

A JSX element is a combination of JavaScript code and HTML tags that describes what you’d like to display.

## JSX element prop (property)

Em React (e, por extensão, em JSX), props são a abreviação de "properties" (propriedades) e representam os dados passados para um componente. Elas permitem que um componente receba informações dinâmicas de seus "pais" e renderize de acordo com esses valores. Elas são equivalentes aos atributos em HTML, mas com maior flexibilidade e funcionalidade.

### Podemos passar o objeto completo como argumento da função (elemento):

```
function Component(props) {
  return <p>{props.value}</p>;
}

function App() {
  return <Component value="Olá, mundo!" />;
}
```

### Desestruturação

Ou podemos usar **desestruturação** para passar os atributos diretos como argumento da função (elemento). Ao usar **desestruturação** na definição dos parâmetros da função, é obrigatório usar {} para indicar que você está extraindo propriedades específicas de um objeto:

```
function Component({ value }) {
  return <p>{value}</p>;
}

function App() {
  return <Component value="Olá, mundo!" />;
}
```

### defaultProps

É possível definir valores padrão para as props, usando `defaultProps`, se as props não receberem nenhum valor como parametro irão utilizar os valores padrão:

```
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

Greeting.defaultProps = {
  name: "Guest",
};

<Greeting />; // Renderiza "Hello, Guest!"
```

### Children

É possível passar valores para as props de um componente através de elementos filhos (children) em vez de usar diretamente propriedades como `props.propriedade`. Isso é comumente feito utilizando a prop especial chamada `children`.

Exatamente! No React, qualquer coisa que você colocar entre as tags de abertura e fechamento de um componente pai será automaticamente interpretada como o valor da propriedade especial children, mesmo que você não mencione explicitamente o nome children no código.

Essa é uma funcionalidade implícita do React. O que você coloca como conteúdo dentro de <Componente> é tratado como o valor padrão da prop children, sem necessidade de configurá-la explicitamente.

```
function Wrapper(props) {
  return <div>{props.children}</div>;
}

<Wrapper>
  <h1>Olá!</h1>
  <p>Este é um parágrafo.</p>
</Wrapper>
```

Neste caso, tudo que está entre `<Wrapper>` e `</Wrapper>` é interpretado como `props.children`.
O React automaticamente passa o seguinte para o componente `Wrapper`:

```
{
  children: (
    <>
      <h1>Olá!</h1>
      <p>Este é um parágrafo.</p>
    </>
  )
}
```

# Refêrencias

- [Learn React - Quick Start](https://react.dev/learn)

- [React 16.12 Tutorial 13: props.children](https://youtu.be/Sq0FoUPxj_c?si=S8ki-i4AbIgRA21j)