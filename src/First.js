import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';


class First extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: false
    }
  }
  makeRed (e) {
    if (e === "Xxxx") {
      this.setState({ isValid: '' })
    } else {
      this.setState({ isValid: 'red' })
    }
  }

  render () {
    const {isValid} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className=" col-sm-12 col-md-12 col-lg-12" style={{ padding: '15px' }} >
            <ul className="nav nav-pills">
              <li role="presentation" className="active"><a href="/">First</a></li>
              <li role="presentation"><a href="/second">Second</a></li>
              <li role="presentation"><a href="/third">Third</a></li>
              <li role="presentation"><a href="/fourth">Fourth</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className=" col-sm-12 col-md-12 col-lg-12 text-center" style={{ padding: '15px' }} >
            <h3>Vallidation Xxxx</h3>
            <input
              className={isValid}
              type="text"
              name="name"
              placeholder="Xxxx"
              onChange={(e) =>this.makeRed(e.target.value)
              }
            />
          </div>
        </div>
      </div>
    )
  }
}
export default First
