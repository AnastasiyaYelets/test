import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

class First extends Component {
  constructor(props) {
    super(props)
  }

  getFirstUser() {
    return axios.get('/user/12345')
  }

  getSecondUser() {
    return axios.get('/user/246810')
  }

  getRequest() {
    axios.all([this.getFirstUser(), this.getSecondUser()])
    .then(axios.spread(function (acct, perms) {
      console.log('оба ответа получены')
    }))
}
  render () {
  this.getRequest()
    return (
      <div className="container">
        <div className="row">
          <div className=" col-sm-12 col-md-12 col-lg-12" style={{ padding: '15px' }} >
            <ul className="nav nav-pills">
              <li role="presentation"><a href="/">First</a></li>
              <li role="presentation"><a href="/second">Second</a></li>
              <li role="presentation" className="active"><a href="/third">Third</a></li>
              <li role="presentation"><a href="/fourth">Fourth</a></li>
              <li role="presentation"><a href="/fifth">Fifth</a></li>
            </ul>
          </div>
          <div className=" col-sm-12 col-md-12 col-lg-12 text-center" style={{ padding: '15px' }} >
            <h3>Promises</h3>
          </div>
          <div className=" col-sm-12 col-md-12 col-lg-12 text-left" style={{ padding: '15px' }} >
            <div>getFirstUser()</div>
            <div>return axios.get('/user/12345')</div>
            <br></br>
            <div>getSecondUser()</div>
            <div>return axios.get('/user/246810')</div>
            <br></br>
            <div> getRequest()</div>
            <div> axios.all([getFirstUser(), getSecondUser()])</div>
            <div>.then(axios.spread(function (acct, perms)</div>
            <div> console.log('оба ответа получены')))</div>
          </div>
        </div>
      </div>
    )
  }
}
export default First
