# Render and Commit

### 1. Render

#### 1). Render process

0. “Rendering” is React calling your components.
1. In the initial render, framework call `createRoot` with the target DOM.
2. In the re-render process, it is like a waiter(React) serving customer in a restaurant, it is triggered by components'
   state changes.
3. During the initial render, React will create the DOM nodes for `<h1>, <p>` tags.
4. During a re-render, React will calculate which of their properties, if any, have changed since the previous render.
   It won’t do anything with that information until the next step, the commit phase.

#### 2). Detail

1. Rendering is stateless, which means same input result in same output(JSX).
2. React only changes the DOM nodes if there’s a difference between renders. 


