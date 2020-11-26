import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { TopNavBar } from './components';
import { FilmsPage, FilmDetailsPage } from './pages';

function App() {
  return (
    <Router>
      <TopNavBar />
      <Switch>
        <Route path="/" render={() => <h1>home page</h1>} exact />
        <Route path="/movie" component={FilmsPage} exact />
        <Route path="/movie/:slug" component={FilmsPage} exact />
        <Route path="/movie/details/:id" component={FilmDetailsPage} />
        <Route path="/tv" component={FilmsPage} exact />
        <Route path="/tv/:slug" component={FilmsPage} exact />
        <Route path="/tv/details/:id" component={FilmDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
