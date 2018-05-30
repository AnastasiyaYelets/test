import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';


class Fifth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource: []
    }
  }


  componentDidMount(){
    return fetch('https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        })
      })
      .catch((error) =>{
        console.error(error);
      });
    }

  render() {
    const { dataSource } = this.state
    if(this.state.isLoading) {
      return (
        <div>
          loading...
        </div>
      )
    }
    const sumPrice = dataSource.reduce((previousValue, currentValue,)=> {
      return previousValue + currentValue.price;
    }, 0);
    const sum = {id: 'итого', price: sumPrice}
    const dataSourseWithTax = dataSource.map((item)=> {
      const taxPrice = item.price * 1.13
      return [item, {price: Math.round(taxPrice, 1)}]
    });
    const products = [...[].concat.apply([], dataSourseWithTax), sum ];
    const columns = [{
      dataField: 'id',
      text: 'ID'
    }, {
      dataField: 'title',
      text: 'Product Name'
    }, {
      dataField: 'description',
      text: 'Description'
    }, {
      dataField: 'year',
      text: 'Year'
    }, {
      dataField: 'color',
      text: 'Color'
    }, {
      dataField: 'status',
      text: 'Status'
    }, {
      dataField: 'price',
      text: 'Price'
    }];
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        alert(`Do you want delete row ${rowIndex}?`);
        const { dataSource } = this.state;
        const newDataSource = dataSource.filter((item) => (item.id !== Math.floor(rowIndex / 2)+1 ))
        console.log(newDataSource, Math.floor(rowIndex / 2)+1)
      this.setState({ dataSource: newDataSource })
    }
  }
    return(
      <div className="container">
        <div className="row">
          <div className=" col-sm-12 col-md-12 col-lg-12" style={{ padding: '15px' }} >
            <ul className="nav nav-pills">
              <li role="presentation"><a href="/">First</a></li>
              <li role="presentation"><a href="/second">Second</a></li>
              <li role="presentation"><a href="/third">Third</a></li>
              <li role="presentation"><a href="/fourth">Fourth</a></li>
              <li role="presentation" className="active"><a href="/fifth">Fifth</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className=" col-sm-12 col-md-12 col-lg-12 text-center" style={{ padding: '15px' }} >

            <BootstrapTable keyField='id' data={ products } columns={ columns } rowEvents={ rowEvents } />
            <button
              type="button"
              className="btn btn-primary btn-md col-md-2"
              onClick={() => {
                this.read()
              }}
              >
                Add item
              </button>
          </div>
        </div>
      </div>
      )
    }
  }
export default Fifth
