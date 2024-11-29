# Accessing DOM in React by using `useRef`

In general we don't directly manipulate the DOM.

However, in some situations manipulating the DOM is necessary. Then, how do we access DOM in React?

Two steps:

- 1. Create a `ref` object using `useRef` hook and bind it with `JSX`.

- 2. Access the DOM object through `ref.current`.

### Example

```
import { useRef } from "react";

function UseRefComponent() {
    let content = useRef<HTMLInputElement | null>(null);
    const printInputContent = () => {
        console.log(content.current?.value);
        content.current?.focus();
        content.current!.value = '';
    }

    return (
        <div>
            <input ref={content} placeholder="Type and print" />
            <button onClick={printInputContent}>console.log()</button>
        </div>
    );
}

export default UseRefComponent;
```

Script file: [UseRefComponent.tsx](../projects/react-hooks/src/components/UseRefComponent.tsx)

## Ref Hook - `useRef`

`useRef` is a React Hook that lets you reference a value that's not need for rendering.

```
const ref = useRef(initialValue);
```

- `initialValue`: The value you want the `ref` object's `current` property to be initially. It can be a value of any type. This argument is ignored after the initial render.

- `useRef` returns an object with a single property:

    - `current`: Initially, it's set to the `initialValue` you have passed. You can later set it to do something else. if you pass the `ref` object to React as a `ref` attribute to a **JSX** node, React will set its `current` property.
    
    - On the next React renderings, `useRef` will return the same object on DOM (will be displayed the same, because it doesn't cause re-rendering.)

## When to use `useRef`

`useRef` is used to persist values across renders without causing re-renders. It can be used to access and interact with DOM elements or to keep mutable values that don't affect the rendering.

Also:

- 1. Storing timeout IDs.

- 2. Storing and manipulating DOM elements, like focus.

- 3. Storing other objects that aren't necessary to calculate JSX.

If your component needs to store some value, but it doesn't impact the rendering logic, choose `refs`.

# References

- [6. React 18 with TypeScript - useRef hook](https://youtu.be/jysq5mMitC4?si=CC0p8v3A0KdpVVGy)