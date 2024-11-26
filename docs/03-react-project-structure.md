# React Structure

Estrutura React criada a partir da biblioteca `create-react-app` (`npx create-react-app <project_name> --template typescript`).

```
tsconfig.json ------- specifies settings that will be used by TypeScript when compiling our code.
```

## `public` folder

```
public -------------- static resources
    favicon.icon ---- favorite icon
    index.html ------ main page
    logo192.png ----- logo
    logo512.png ----- logo 
    manifest.json --- plays a crucial role in defining the behavior and appearance of the PWA (Progressive Web App) when users install it on their devices.

    robots.txt ------ robots.txt is not specific to React.js but is a standard file used in web development to instruct web crawlers (like search engine bots) on how to interact with a website. It is used to define rules and permissions for web crawlers, specifying which parts of the site they are allowed or disallowed to access and index.
```

Obs.: Você só precisa do `index.html` e que nela exista uma `<div>` com `id=root`.

O arquivo `index.html` do diretório `public` e a `div` de id `root` serão referenciadas no arquivo `index.tsx` presente no diretório `src`, observe:

```
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## `src` folder

```
src ----------------- static resources
    App.css --------- Style of App component
    App.tsx --------- App Component
    App.test.tsx ---- App testing file
    index.css ------- Style
    index.tsx ------- Project Entry
    logo.svg -------- logo
    reportWebVitals.ts
            --------- measure and report key performance metrics that can help developers and site operators analyze and optimize the user experience. (need web-vitals library)
    setupTests.ts --- unit tests of Components (need jest-dom library)
    react-app-env.d.ts
            --------- references TypeScript types declarations that are specific to projects started with Create React App.
            --------- add support for importing resources files such as bmp, gif, etc. If you don't have this file when you import some resources you're going to get errors.
            --------- the line of code `/// <reference types="react-scripts" />` inside `react-app-env.d.ts` is called the triple-slash directive, which refers to a file with some types definitions in `node_modules/react-scripts/lib/react-app.d.ts`
```

Obs.: Você só precisa do `App.tsx`, `index.tsx` e `react-app-env.d.ts`.

### `App.tsx` Component

App Component is the root component of React.

Você pode renomear o componente `App.tsx` para outro nome, mas precisará ajustar as referências correspondentes no seu projeto para que tudo funcione corretamente.

## `index.tsx`

Application entry point.

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
```

- `React`: Required to use **JSX** and **React** functionalities

- `ReactDOM`: Provides the method to render the **React** application into the DOM.

- `App`: The root component of the application where the main structure of your app is defined.

- `CSS files`: For styling the application, although it's optional.

### React.StrictMode

```
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

If we enable **Strict Mode** every component is going to be rendered twice.

Strict Mode enables the following development-only behaviors:

- Your components will <u>**re-render an extra time**</u> to find bugs caused by impure rendering.

- Your components will <u>**re-run Effects an extra time**</u> to find bugs caused by missing Effect cleanup.

- Your compenents will <u>**be checked for usage of deprecated APIs**</u>.

## Extensão de um arquivo TypeScript

A extensão de um arquivo TypeScript é `.ts`.

### Exemplos:

- Arquivo TypeScript padrão: `app.ts`, `utils.ts`.

- Arquivos TypeScript com JSX (para React): `.tsx`.

### Diferença entre `.ts` e `.tsx`:

- `.ts`: Usado para arquivos TypeScript comuns, que não contêm **JSX**.

- `.tsx`: Usado em projetos que utilizam **React** e combinam TypeScript com **JSX/TSX**. Ele permite usar sintaxe **JSX** dentro do TypeScript.

### Difference between `.ts` and `.tsx` in TypeScript

The `.ts` file extension is used when you are creating functions, classes, reducers, etc., that do not require the use of **JSX** syntax and elements, whereas the `.tsx` file extension is used when you create a **React** component and use **JSX** elements and syntax.

The introduction of `.tsx` also resulted in three additional things:

- JavaScript bundlers like webpack, esbuild, and others can run different plugins for `.tsx` files

- Test runners like **Jest** can run a different test environment only for `.tsx` files

- New language support by code editors