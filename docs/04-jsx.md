# JSX (JavaScript XML)

**JSX (JavaScript XML)** is a syntax extension for JavaScript that is commonly used in **React** to describe the structure and elements of the user interface. JSX allows you to write HTML-like code within JavaScript, making it easier to define and render React components.

## Rules

### 1 Quotes 

Don't use quotes when using JSX.

### 2 JavaScript Expressions

To insert dynamic data, variables, or expressions into the rendered content, use curly braces { } inside JSX elements. 

You cannot use statements, `if` block or `for` loop for examaple.

### 3 CSS classes

Use the `className` keyword instead of `class` to refer to a CSS class.

The keyword `class` is already a reserved word of TypeScript.

### 4 Inline Style

Use the `style` attribute to set inline style with the syntax `{ {key:value} }`.

First curly bracets refer to data, and the second curly bracets refer to an JavaScript object.

### 5 Only One Top-Level Element

All elements within a JSX expression must be wrapped in a single parent element.

### 6 Closing Tags

All tags must be closed, even tags like `<br/>` and `<hr/>`.

### 7 First Letter of a Tag

- If it's lower case, it'll be translated to an HTML element with the same tag name. If it can't find the tag name in HTML then it'll throw an error.

- If it's upper case, React will render a component, if no component is found then it'll throw an error.

### 8 Comments

Use the syntax bellow:

```
{/*This is a comment*/}
```

HTML comments are not supported.

# Referências

- [2. React 18 with TypeScript - JSX Syntax](https://youtu.be/pmRgrYJ8eGw?si=uPoVH3-L6skD9Ojn)