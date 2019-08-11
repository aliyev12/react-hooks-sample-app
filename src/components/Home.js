import React from 'react';
import '../styles/Home.css';

const Home = () => (
  <div className="Home">
    <h1>React Hooks</h1>
    <ul>
      <li>React 16.8</li>
      <li>use state and other React features without writing a class</li>
      <li>Completely opt-in and 100% backwards-compatible</li>
      <li>reuse stateful logic between components</li>
      <li>Gradual Adoption Strategy</li>
      <li>Huge components that are hard to refactor and test.</li>
      <li>
        Duplicated logic between different components and lifecycle methods.
      </li>
      <li>Complex patterns like render props and higher-order components.</li>
      <li>
        Only call Hooks at the top level. Don’t call Hooks inside loops,
        conditions, or nested functions.
      </li>
      <li>
        Only call Hooks from React function components. Don’t call Hooks from
        regular JavaScript functions. (There is just one other valid place to
        call Hooks — your own custom Hooks. )
      </li>
      <li>
        Basic Hooks
        <ul>
          <li>useState</li>
          <li>useEffect</li>
          <li>useContext</li>
        </ul>
      </li>
      <li>
        Additional Hooks
        <ul>
          <li>useReducer</li>
          <li>useCallback</li>
          <li>useMemo</li>
          <li>useRef</li>
          <li>useImperativeHandle</li>
          <li>useLayoutEffect</li>
          <li>useDebugValue</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Home;
