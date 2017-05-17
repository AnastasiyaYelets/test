import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class SearchPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  componentWillReceiveProps (nextProps) {
    // this.props.location.hash !== nextProps.location.hash &&
    this.decodeHash(nextProps.location.hash)
  }

  decodeHash(hash) {
    const read = hash.includes('#read')
    const write = hash.includes('#write')
    const remove = hash.includes('#remove')
    if (read) {
      console.log('action in iframe: read')
      var retObj = JSON.parse(localStorage.getItem("object"))
      parent.location = "http://localhost:8080/fourth#isRed" + retObj
    }
    if (write) {
      console.log('action in iframe: write')
      const newHash = hash.replace('#write','')
      var sObj = JSON.stringify(newHash)
      localStorage.setItem("object", sObj)
      console.log(`message in iframe: ${localStorage.object}`)
      this.setState({text: newHash})
      parent.location = "http://localhost:8080/fourth#isWriten"
    }
    if (remove) {
      console.log('action in iframe: remove')
      localStorage.clear()
      this.setState({text:''})
      parent.location = "http://localhost:8080/fourth#isRemoved"
    }
  }

  render() {
    console.log('localStorage in frame: ', localStorage.object)

    const { text } = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="input-group input-group-lg col-md-12" style={{ padding: '50px' }}>
            <input
              type="text"
              className="form-control"
              placeholder="iFrame localStorage"
              value={ text }
              aria-describedby="sizing-addon1"
              onChange={(e) => {
                var sObj = JSON.stringify(e.target.value)
                localStorage.setItem("object", sObj)
                console.log(localStorage.object)
                this.setState({text:e.target.value})
              }
            }
          />
        </div>
        <div className="col-md-12">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => {
              localStorage.clear()
              this.setState({text:''})
              parent.location = "http://localhost:8080/fourth#remove"
            }}
            >
              Clear localStorage
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPage
