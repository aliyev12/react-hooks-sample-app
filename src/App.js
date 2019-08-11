import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppProvider } from './contexts/SizesContext';
import { ReducerProvider } from './contexts/ReducerContext';
import Home from './components/Home';
import Header from './components/Header';
import CustomHooks from './components/CustomHooks';
import Refactoring from './components/Refactoring';
import ContextExample from './components/ContextExample';
import ReducerExample from './components/ReducerExample';

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => <Home {...routerProps} />}
          />
          <Route
            exact
            path="/custom-hooks"
            render={routerProps => <CustomHooks {...routerProps} />}
          />
          <Route
            exact
            path="/refactoring"
            render={routerProps => <Refactoring {...routerProps} />}
          />
          <Route
            exact
            path="/context"
            render={routerProps => <ContextExample {...routerProps} />}
          />
          <Route
            exact
            path="/reducer"
            render={routerProps => (
              <ReducerProvider>
                <ReducerExample {...routerProps} />
              </ReducerProvider>
            )}
          />
        </Switch>
      </div>
    </AppProvider>
  );
};

export default App;
