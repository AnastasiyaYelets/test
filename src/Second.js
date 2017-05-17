import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Second extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: [],
      color: [],
      colors:['1','2','3','4','5'],
      manufacturer: [],
      sale: false
    }
      this.onColorChanged = this.onColorChanged.bind(this)
      this.onManufacturerChanged = this.onManufacturerChanged.bind(this)
  }
  componentDidMount() {
  const { query } = this.props.location
  const {manufacturer, color, size} = this.props.location.query
  if (manufacturer) {
      const newManufacturer = (typeof manufacturer === 'string') ? [manufacturer] : manufacturer
      this.setState({ manufacturer: newManufacturer  })
  }
  if (color) {
      const newColor = (typeof color === 'string') ? [color] : color
      this.setState({ color: newColor  })
  }
  if (size) {
      this.setState({ size })
  }
}

  onSizeChanged = (event) => {
      const { location } = this.props
        const { query } = this.props.location
    this.setState({
      size: event.currentTarget.value
    })
      browserHistory.push({ pathname: `${location.pathname}`, query: { ...query, size : event.target.value } })
  }

  onManufacturerChanged (event) {
    const { location } = this.props
    const { query } = this.props.location
    const { manufacturer = []} = this.state
    const newManufacturer = []
    if (manufacturer.includes(event.target.value)) {
      const indexItemToRemove = manufacturer.findIndex(manufacturerItem => manufacturerItem === event.target.value)
      const newManufacturer= [
        ...manufacturer.slice(0, indexItemToRemove),
        ...manufacturer.slice(indexItemToRemove + 1)
      ]
      this.setState({
        manufacturer: newManufacturer
      })
      browserHistory.push({ pathname: `${location.pathname}`, query: { ...query, manufacturer: newManufacturer } })
    } else {
      const newManufacturer = [...manufacturer, event.target.value]
      this.setState({
        manufacturer: newManufacturer
      })
      browserHistory.push({ pathname: `${location.pathname}`, query: { ...query, manufacturer: newManufacturer } })
    }
  }

  onColorChanged (item) {
    const { location } = this.props
      const { query } = this.props.location
    const { color } = this.state
    if (color.includes(item)) {
      const indexItemToRemove = color.findIndex(colorItem => colorItem === item)
      const newColor = [
        ...color.slice(0, indexItemToRemove),
        ...color.slice(indexItemToRemove + 1)
      ]
      this.setState({
        color: newColor
      })
        browserHistory.push({ pathname: `${location.pathname}`, query: { ...query, color : newColor } })
    } else {
      const newColor = [...color, item]
      this.setState({
        color: newColor
      })
        browserHistory.push({ pathname: `${location.pathname}`, query: { ...query, color : newColor } })
    }
  }

  onSaleChanged = (event) => {
    const { sale } = this.state
    this.setState({
      sale: !sale
    })
  }

  renderColors() {
    return (this.state.colors.map((item,i) =>
    <li key={i}>
      <p>  <input
        type="checkbox"
        checked={this.state.color.includes(item)}
        onChange={() => this.onColorChanged(item)}
      />{item}</p>
    </li>)
  )
}


render () {
  const { size, color, manufacturer, sale }  = this.state
  console.log(`http://server.domain/filter${this.props.location.search}`)
  return (
    <div className="container">
      <div className="row">
        <div className=" col-sm-12 col-md-12 col-lg-12" style={{ padding: '15px' }} >
          <ul className="nav nav-pills">
            <li role="presentation"><a href="/">First</a></li>
            <li role="presentation" className="active"><a href="/second">Second</a></li>
            <li role="presentation"><a href="/third">Third</a></li>
            <li role="presentation"><a href="/fourth">Fourth</a></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className=" col-sm-12 col-md-12 col-lg-12 text-center" style={{ padding: '15px' }} >
          <h3>URL Filter</h3>
        </div>
        <div className='form-group col-sm-3 col-md-3 col-lg-3'>
          <label className='control-label col-xs-12 text-center'> Size </label>
          <div className='col-xs-12 col-md-12 text-center'>
            <p><input
              name="size"
              type="radio"
              value="S"
              checked={size.includes('S')}
              onChange={this.onSizeChanged}
            />S</p>
            <p><input
              name="size"
              type="radio"
              value="M"
              checked={size.includes('M')}
              onChange={this.onSizeChanged}
            />M</p>
            <p><input
              name="size"
              type="radio"
              value="L"
              checked={size.includes('L')}
              onChange={this.onSizeChanged}
            />L</p>

          </div>
        </div>
        <div className='form-group col-sm-3 col-md-3 col-lg-3'>
          <label className='control-label col-xs-12 text-center'> Color </label>
          <div className='col-xs-12 col-md-12 text-center'>
            <ul className='list-unstyled'>
              {this.renderColors()}
            </ul>
          </div>
        </div>
        <div className='form-group col-sm-3 col-md-3 col-lg-3'>
          <label className='control-label col-xs-12 text-center'> Manufacturer </label>
          <div className='col-xs-12 col-md-12 text-center'>
            <select value={manufacturer} onChange={(e) => this.onManufacturerChanged(e)} multiple = {true}>
              <option value="aaa">aaa</option>
              <option value="bbb">bbb</option>
              <option value="ccc">ccc</option>
              <option value="ddd">ddd</option>
            </select>
          <label className='control-label col-xs-12 text-center'> { manufacturer.join(', ') } </label>
            </div>
          </div>
          <div className='form-group col-sm-3 col-md-3 col-lg-3'>
            <label className='control-label col-xs-12 text-center'> Sale </label>
            <div className='col-xs-12 col-md-12 text-center'>
              <p><input
                type="checkbox"
                checked={sale}
                onChange={this.onSaleChanged}
              />-1</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Second
