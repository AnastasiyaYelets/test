import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute } from "react-router";
import SearchPage from "./SearchPage";
import ResultPage from "./ResultPage";
import App from './App'

import './index.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={SearchPage} />
          <Route path="results" component={ResultPage} />
      </Route>
  </Router>,
  document.getElementById('root')
);
