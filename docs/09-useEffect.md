# `useEffect` Hook Intro

The `useEffect` is a React Hook function used to perform operations (side effect) in React components tha **are not triggered by events but by rendering itself**, such as sending AJAX requests, modifying the DOM, ando so on.

# Definition and Syntax

The `useEffect` hook allows you to <u>perform side effects in functional components</u>. It accepts two arguments:

- 1. Effect Callback Functions: This function contains the code for the side effect you want to perform. It runs after the component renders.

- 2. Dependency Array (Optional): An array of dependencies that determines when the effect should re-run. If you omit this array, the effect will run after every render. If you provide an array, the effect will only re-run when one of the dependecies change.

```
useEffect( () => {
        // Code for side effect goes here

        // Optional cleanup function
        return () =>  {
            // Cleanup code goes here
        }
    }, [dependencies]
);
```

# `useEffect` dependencies

The execution of the `useEffect` effect function varies depending on the dependencies passed in. Different execution behaviors will occur based on the provided dependencies.

| Dependencies           | Execution of Effect function                                      |
|-------------------------|-------------------------------------------------------------------|
| No Array               | Runs on every render                                             |
| An empty array `[]`    | The effect runs only once after the initial render               |
| Array with Dependencies `[dep1, dep2, ...]` | Runs on first render + And any time any dependency value changes |

Using `useEffect` without a dependency array means the effect runs on every render. This can lead to performance issues if the effect involves expensive operations or updates that can be avoided.

By specifying dependencies, you control when the effect should re-run, which can be crucial for optimizing performance and ensuring that side effects are handled correctly.

Example: Fetching data based on State or Props.

# Effect cleanup

In React, using the `useEffect` hook with a cleanup function is essential for managing side effects and avoiding resource leaks. The cleanup function is executed before the effect runs again or when the component unmounts. This is particularly useful for cleaning up subscriptions, timers, or other side effects that need to be disposed of properly.

# Rerferences

- [10. React 18 with TypeScript - useEffect Hook](https://youtu.be/cl3EojODIw4?si=H8WmN6M3S8HEvC2F)