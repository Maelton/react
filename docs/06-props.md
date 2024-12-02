# Props

In React, **props** (short for properties) are a way to pass data from one component to another, particularly from a parent component to a child component. They are immutable objects, meaning the child component can not modify the props it receives.

## 1. Data Flow

- Props allow data flow from a parent component to its child components. This unidirectional data flow helps maintain a clear and predictable structure in your application.

- Can pass any kind of data: `number`, `string`, `boolean`, `array`, `object`, `function`, even JSX.

## 2. Read Only

- Props are immutable for the child component's perspective. This means that the child component can not modify the props it receives; it can only use them. If a child component needs to change the data, it should communicate the change back to the parent component.

## 3. Dynamic Rendering

- Props enable dynamic rendering of components. For instance, you can pass different values to a component to customize its appearance or behaviour.

# Referências

- [PROPS in React explained 📧](https://youtu.be/uvEAvxWvwOs?si=mdN79wTLHq7qiskL)

- [7. React 18 with TypeScript - Props](https://youtu.be/pXgUCZJECo8?si=Z-Q3Nhr0l7LR8d6U)