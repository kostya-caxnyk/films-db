import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { TopNavBar } from './components';
import { FilmsPage } from './pages';

function App() {
  return (
    <Router>
      <TopNavBar />
      <Switch>
        <Route path="/" render={() => <h1>home page</h1>} exact />
        <Route path="/movie" component={FilmsPage} exact />
        <Route path="/movie/:slug" component={FilmsPage} />
        <Route path="/tv" component={FilmsPage} exact />
        <Route path="/tv/:slug" component={FilmsPage} />
      </Switch>
    </Router>
  );
}

export default App;
