import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { ErrorBoundry, TopNavBar } from './components';
import { FilmsPage, FilmDetailsPage } from './pages';

const App = () => {
  return (
    <ErrorBoundry>
      <Router>
        <TopNavBar />
        <Switch>
          <Route path="/" render={() => <h1>HOME PAGE</h1>} exact />
          <Route path="/movie" component={FilmsPage} exact />
          <Route path="/movie/:slug" component={FilmsPage} exact />
          <Route path="/movie/details/:id" component={FilmDetailsPage} />
          <Route path="/tv" component={FilmsPage} exact />
          <Route path="/tv/:slug" component={FilmsPage} exact />
          <Route path="/tv/details/:id" component={FilmDetailsPage} />
          <Route render={() => <h1>PAGE NOT FOUND</h1>} />
        </Switch>
      </Router>
    </ErrorBoundry>
  );
};

export default App;
