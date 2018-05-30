import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute } from "react-router";
import SearchPage from "./SearchPage";
import ResultPage from "./ResultPage";
import App from './App'
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';

import './index.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={First} />
          <Route path= "second" component = {Second}/>
          <Route path= "third" component = {Third}/>
          <Route path="fourth" component = {Fourth}/>
        <Route path="fifth" component = {Fifth}/>
      </Route>
  </Router>,
  document.getElementById('root')
);
