# React Hooks

Hooks no React são **funções** que permitem utilizar **estados** (atributo `state`) e outras **funcionalidades do React**, como o ciclo de vida (lifecycle) e o contexto, em **componentes funcionais**.

## `state` (estado)

O estado (atributo `state`) é uma estrutura de dados usada para armazenar informações dinâmicas que podem afetar a renderização de um componente. Quando o estado de um componente muda, o React re-renderiza esse componente (e seus filhos, se necessário) para refletir as alterações na interface do usuário.

O estado pertence ao componente que o define. Isso significa que cada componente gerencia seu próprio estado de forma isolada, a menos que o estado seja compartilhado por meio de props ou algum sistema de gerenciamento de estado (como Context API, Redux, etc.).

O estado é como uma memória interna que mantém informações que podem mudar durante o ciclo de vida do componente e que afetam diretamente o que é exibido na interface do usuário (UI).

No React, o estado é imutável, o que significa que você não altera o valor diretamente. Em vez disso, usa-se uma função específica para atualizar o estado, como setState (em componentes de classe) ou `setValor` no caso do Hook `useState`.

**Sempre que o estado de um componente é atualizado, ele é re-renderizado por padrão.** Essa re-renderização garante que a interface do usuário (UI) esteja sincronizada com os dados mais recentes armazenados no estado do componente.

## Why React Hooks?

We can build static components in React however UI components are often dynamic, they may need to change the status of their data, reactivity lifecycle events, access elements from the DOM among many other things.

Prior for React version 16.8, developers were required to write classes to take advantege of certain React features, now you can still use classes in React but hooks generally provide a more ergonomic way to build components because you can reuse statefull logic without changing your component hierarchy.

In the past, statefull logic or data that changes within the application was tightly coupled to a class-based component, that means that in order to work with reactive data you'd need to create a component, but this approach usually led to a complex tree of nested components.

```
Forcing hierarchical structure for anything that is inherently non-hierarchical (such as contextual data or orthogonal properties) never turns out good.
```

Hooks remove reactivity from components, they give you access to lower level features of React outside the context of a component.

## React Built-in Hooks

React has 10 built-in hooks:

### Basic Hooks

#### 1. useState

useState is a React Hook that lets you add a state variable to your component.

useState returns an array with exactly two values:

- 1. The current state. During the first render, it will match the initialState you have passed.

- 2. The set function that lets you update the state to a different value and trigger a re-render.

**Exemplo:** `let [counter, setCounter] = useState<number>(0);`

useState(): when data changes re-render the UI

The purpose of useState is to handle reactive data, any data that changes in the application is called state, and when the state changes you want React to update de UI so the latest changes are reflected to the end-users.

####  2. useEffect

In order to understand the useEffect React hook you also need to understand the component lifecycle

##### React Component Lifecycle

There are three main phases in a life of a React component: mounting, updating and unmounting.

- **Mounting**: Mounting phase occurs when a React component instance is created and finishes whe it's inserted into the **DOM**.

- **Updating**: Updating phase occurs when you interact with the component and it re-renders.

- **Unmounting**: Unmounting phase occurs when a component is removed from the DOM. When data representing a particular component is removed React removes the associated component.

The `useEffect` React hook allows us to implement logic for all the three phases of the React components lifecycle from within a single function API.

`useEffect` is a React hook which is used to perform side effects in a application. You can think of side effects as the name implies as things happening as consequence of something else. For example, something happens in our application, something changes, something is triggered and as side effect we have something else that happens, in most applications side effect is going to be a result of some **state** changing.

You wanna use `useEffect` when we want to trigger something when some piece of state changes.

##### Structure of `useEffect()`

```
useEffect(
    () => {
        //The code we want to run (to trigger)

        //return () => {}; Optional returning function, only runs when a dependency triggers useEffect()
        // The optional returning function will run before the code above (body of the callback argument)
    },
    [] //Dependency array: where you tell useEffect what it should listen to (what it should react to)
);
```

`useEffect` will always run the callback it recieves as an argument at least once, because it runs when the component is rendered for the first time (mounting phase) whether it has dependencies or not. Then it runs whenever its dependencies - declared in the dependency array - change their state.

Although the callback argument that `useEffect` receives runs when the component is rendered and then whenever the declared dependencies change, the optional function the callback returns only runs when the dependencies change and do not run when the component is rendered.

Also, once a dependency triggers `useEffect()` the returned function will run before the body of the callback that `useEffect` receives as an argument. If no dependency is declared the returning function will run when the component unmounts (unmounting phase).

#### 3. useContext

This hook allows you to work with React's context API which itself is a mechanism that allows you to share values throughout the entire component tree.


### Additional Hooks

- 4. useReducer

- 5. useCallback

- 6. useMemo

#### 7. userRef

Very useful whenever you need to refence a value that is not need for rendering.

The `useRef()` Hook in React returns a mutable ref object that persists across renders of a component. This object has a single property, `current`, which you can use to store a reference to a DOM element or any other value.

Think about `useRef` as `useState` or something similar to `userState` in the sense that you can hold and mutate values that are used in your component but the main difference is that unlike `useState`, `useRef` does not trigger a re-render of the component and `userRef` values are not used in the return body of the actual component, it's not used for something that you're rendering. 

We can not access a state directly, we need to use `setState()` which is a function and therefore is added to **Macro Task Queue**, differently from `useRef` where we can access `current` directly and alter the value of our reference on the main thread of the application. 

We cannot keep displaying the updated value from our object reference on the UI, but that's the difference between `userRef` and `useState`, `userRef()` doesn't cause a component to re-render. If you need the component to re-render and therefore update the UI use `useState()` instead of `useRef()`.

**Great example to understand how `useRef()` works by differentiating it from how `useState()` works:**

```
import { useRef, useState } from 'react';

interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log('State:', count);
    console.log('Ref:', countRef.current);
  };

  return (
    <div className="tutorial">
      Count: {count}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

A more common use case for `useRef` is to grab HTML elements from the DOM.

#### 8. useImperativeHandle

#### 9. useLayoutEffect

#### 10. useDebugValue

# Referências

- [5. React 18 with TypeScript - useState Hook](https://youtu.be/3bLRolNuWz8?si=rW9rfD-zowDTBdh0)

- [6. React 18 with TypeScript - useRef hook](https://youtu.be/jysq5mMitC4?si=RehX2X-ehtqCrwye)

- [Webhooks (Os Melhores Apps Usam) // Dicionário do Programador](https://youtu.be/2JHKIrComW0?si=BHTZNIjg4DVaa_6L)

- [10 React Hooks Explained // Plus Build your own from Scratch](https://youtu.be/TNhaISOUy6Q?si=uD-1X7-TFI_OEdtb)

- [React Component Lifecycle | React Tutorial for Beginners | KnowledgeHut](https://youtu.be/zvM_FUVcB-0?si=KYwrdrn5ZIqhe04O)

- [Learn React Hooks: useEffect - Simply Explained!](https://youtu.be/-4XpG5_Lj_o?si=9gncsNNPMFH-PrVh)

- [useState](https://react.dev/reference/react/useState)

- [Learn React Hooks: useRef - Simply Explained!](https://youtu.be/42BkpGe8oxg?si=_zaLdsZE_Ejh397A)