import React, { Suspense } from 'react';
import './App.css';
import { Link, Route, Switch } from "wouter"
import Detail from './pages/Detail';
import ErrorPage from './pages/ErrorPage';
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

const HomePage = React.lazy(() => import('./pages/Home'))

function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'midudev',
        suscribeteAlCanal: true
      }
    }>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to="/">
              <figure className="App-logo">
                <img alt='Giffy logo' src='/logo.png' />
              </figure>
            </Link>
            <GifsContextProvider>
              <Switch>
                <Route
                  component={HomePage}
                  path="/"
                />
                <Route
                  component={SearchResults}
                  path="/search/:keyword/:rating?"
                />
                <Route 
                  component={Detail}
                  path="/gif/:id"
                />            
                <Route 
                  component={ErrorPage}
                  path="/:rest*" 
                />
              </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
