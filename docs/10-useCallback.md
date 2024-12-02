# Why use `useCallback`?

In React, components can re-render frequently, especially when their state or props change. When a function is created inside a component, a new instance of that function is created on every render. If that function is passaed as a prop to a child component, the child component will receive a new function reference on each render, which can cause unnecessary re-renders of the child component.

`useCallback` helps mitigate this by memoizing the function and returning the same instance of the function unless its dependencies change. This can improve performance by avoiding unnecessary re-renders of components that rely on that function.

# `useCallback` Hook

```
const memoizedCallback = useCallback( () => {
        // Your callback logic here
    }, [dependencies]
);
```

- `momoizedCallback`: The memoized version of the callback function.

- `useCallback`: The hook that memoizes the callback.

- `() => {}`: The callback function you want to memoize.

- `[dependencies]`: An array of dependencies. The momoized function will only change if one of these dependecies changes.

# References

- [11. React 18 with TypeScript - useCallback Hook](https://youtu.be/WURXpjwucA4?si=OB4y4jWDEK7NTUpi)