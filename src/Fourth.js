import React, { Component } from 'react';
import { Link } from 'react-router';


class First extends Component {
  constructor(props) {
    super(props);

    this.state = {
      childLocation: 'https://nestedsite.firebaseapp.com',
      message: ''
    }
  }
  componentWillReceiveProps (nextProps) {
  // this.props.location.hash !== nextProps.location.hash &&
  this.decodeHash(nextProps.location.hash)
}

decodeHash(hash) {
  const isRead = hash.includes('#isRead')
  const isWriten = hash.includes('#isWriten')
  const isRemoved = hash.includes('#isRemoved')
  const remove = hash.includes('#remove')

  if (isRead) {
      const newHash = hash.replace('#isRead','')
    console.log('action in site: isRead')
    console.log(`message in site: ${newHash}`)
    this.setState({message: newHash})
  }
  if (isWriten) {
    console.log('action in site: isWriten')
  }
  if (isRemoved) {
    console.log('action in site: isRemoved')
  }
  if (remove) {
    console.log('action in site: remove')
    this.setState({ message:''})
  }
}

  read () {
    window.frames["myFrame"].location =  "https://nestedsite.firebaseapp.com/#read"
  }
  write () {
    const { message } = this.state
    window.frames["myFrame"].location =  "https://nestedsite.firebaseapp.com/#write" + message
  }
  remove () {
    window.frames["myFrame"].location =  "https://nestedsite.firebaseapp.com/#remove"
    this.setState({ message:''})
  }

  render () {
    const { childLocation, message } = this.state
    return (
      <div className="container">
        <div className="row">
          <div className=" col-sm-12 col-md-12 col-lg-12" style={{ padding: '15px' }} >
            <ul className="nav nav-pills">
              <li role="presentation"><a href="/">First</a></li>
              <li role="presentation"><a href="/second">Second</a></li>
              <li role="presentation"><a href="/third">Third</a></li>
              <li role="presentation" className="active"><a href="/fourth">Fourth</a></li>

            </ul>
          </div>
        </div>
        <div className="row">
          <div className=" col-sm-12 col-md-12 col-lg-12 text-center" style={{ padding: '15px' }} >
            <h3>XhrIframeProxy</h3>
            <h4>First of all you can put smth in iframe localStorage and try to read it</h4>
            <div className="col-md-12">
              <button
                type="button"
                className="btn btn-primary btn-md col-md-2"
                onClick={() => {
                  this.read()
                }}
                >
                  Read
                </button>
              </div>
              <div className="col-md-12">
                <div className="input-group input-group-lg col-md-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="..."
                    value={ message }
                    aria-describedby="sizing-addon1"
                    onChange={(e) => this.setState({ message: e.target.value })}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <button
                  type="button"
                  className="btn btn-primary btn-md col-md-2"
                  onClick={() => {
                    this.write()
                  }}
                  >
                    Write
                  </button>
                </div>

                <div className="col-md-12">
                  <button
                    type="button"
                    className="btn btn-primary btn-md col-md-2"
                    onClick={() => {
                      this.remove()
                    }}
                    >
                      Detele
                    </button>
                  </div>


                  <div className="col-md-12">
                    <iframe
                      name="myFrame"
                      src={childLocation}
                      width="300"
                      height="300"
                      >
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      }
      export default First
